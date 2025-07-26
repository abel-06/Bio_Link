
import { useEffect, useState } from "react";
import { Button } from "../../atomo/button";
import { IoLogoGithub } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


interface SocialMedia {
  link: string;
  name: string;
};

export const ButtonGroup = () => {
  const [medias, setMedias] = useState<SocialMedia[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}social_medias.json`)
      .then(response => response.json())
      .then(data => {
        setMedias(data);
      })
      .catch(error => {
        console.error("Erro para ler a API de social medias:", error);
      });
  }, []);

  return (
    <div className="socialMedias w-[45%] grid grid-cols-2 gap-4">
      {medias.map((socialMedia) => (
        <Button 
        color="claroBlue" 
        size="small" 
        type="mediaIcon">
          <a href={`${socialMedia.link}`} id={socialMedia.name} target="_blank" className="flex center justify-center">
            {socialMedia.name === "Github" 
            ? (<IoLogoGithub/>)
            : socialMedia.name === "Instagram" 
            ?(<FaInstagram />)
            : socialMedia.name === "Whatsapp"
            ?(<FaWhatsapp/>)
            : socialMedia.name === "Email"
            ? (<MdEmail />)
            : ""
            }
          </a>
        </Button>
      ))}
    </div>
  );
};
