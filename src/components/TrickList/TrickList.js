import "./TrickList.css";
import PauseableGif from "../PauseableGif/PauseableGif";
import { Collapse } from "antd";
const { Panel } = Collapse;

export default function TrickList({ lists }) {
  return (
    <section className="trick-list">
      <Collapse>
        {Object.values(lists).map((list, index) => {
          return (
            <Panel
              header={`${Object.keys(lists)[index]} (${list.length})`}
              key={`list-${index}}`}
            >
              <Collapse>
                {list.map((trick) => {
                  return (
                    <Panel header={`"${trick.cue}"`} key={trick.id}>
                      <div class="collapse-content">
                        <div class="collapse-section">
                          <p class="label">Hand Signal</p>
                          <p>{trick.handSignal}</p>
                          <img src={trick.handSignalImg} alt="" />
                        </div>
                        <div class="collapse-section">
                          <p class="label">What I Should Do</p>
                          <p>{trick.description}</p>
                          <PauseableGif
                            video={trick.video}
                            slate={trick.slate}
                          />
                        </div>
                        <div class="collapse-section">
                          <p class="label">Troubleshooting</p>
                          <p>{trick.troubleshooting}</p>
                        </div>
                      </div>
                    </Panel>
                  );
                })}
              </Collapse>
            </Panel>
          );
        })}
      </Collapse>
    </section>
  );
}
