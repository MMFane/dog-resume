import "./Emergency.css";
import Photo from "../../components/Photo/Photo";
import { contacts, services } from "../../data/emergency";
import daisyEmergency from "../../data/images/daisy/daisy-emergency.jpg";
import sam from "../../data/images/contacts/sam.jpg";
import steve from "../../data/images/contacts/steve.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
// import default from "../../data/images/contacts/default.jpg"

const images = {
  sam: sam,
  steve: steve,
};

function getImageByKey(key) {
  return images[key];
}

export default function Emergency() {
  const photoWidth = 300;
  const photoHeight = 330;
  const photoAngle = 15;
  return (
    <div>
      <article>
        <Photo
          width={photoWidth}
          height={photoHeight}
          angle={photoAngle}
          bottom={"-50px"}
          right={"-20px"}
          image={daisyEmergency}
          clipBottom={"-70px"}
          clipRight={"220px"}
          clipAngle={135}
        />
        <h2>Emergency Contacts</h2>
        <div className="flex">
          <div className="article-body flex wrap">
            {contacts.map((contact) => {
              const photo = getImageByKey(contact.name.toLowerCase());
              return (
                <div className="contact" key={contact.name}>
                  {photo ? (
                    <img src={photo} alt="" />
                  ) : (
                    <FontAwesomeIcon icon={faAddressCard} className="default" />
                  )}
                  <div>
                    <h3>{contact.name}</h3>
                    <p>
                      <FontAwesomeIcon icon={faPhone} />
                      <a href={`tel:${contact.phone}`}>{contact.phone}</a>{" "}
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faEnvelope} />
                      <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="photo-spacer"
            style={{ minWidth: photoWidth * 0.9 }}
          ></div>
        </div>
      </article>
      <article>
        <h2>Vets & Services</h2>
        <div className="article-body flex wrap">
          {services.map((service) => {
            let address1;
            let address2;
            if (service.address) {
              const addressTemp = service.address.split("/");
              address1 = addressTemp[0];
              address2 = addressTemp[1];
            }
            return (
              <div className="service" key={service.name}>
                <h3>
                  <a href={service.website}>{service.name}</a>
                </h3>
                <p className="subtitle">{service.type}</p>
                <p>
                  <a href={`tel:${service.phone}`}>{service.phone}</a>
                </p>
                <p>
                  <a href={`mailto:${service.email}`}>{service.email}</a>
                </p>
                <p>{service.hours}</p>
                <p className="address">
                  <a href={service.map}>
                    <span>{address1}</span>
                    <span>{address2}</span>
                  </a>
                </p>
              </div>
            );
          })}
        </div>
      </article>
    </div>
  );
}
