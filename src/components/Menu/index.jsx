import React from "react";
import * as S from "./styled";

import Logo from "../../assets/img/logo.png";
import avatarPokiz from "../../assets/img/registrations-avatar/pokiz.jpg";
import avatarArt from "../../assets/img/registrations-avatar/art.jpg";
import avatarFish from "../../assets/img/registrations-avatar/fish.jpg";
import avatarMega from "../../assets/img/registrations-avatar/mega.jpg";
import avatarSoundeo from "../../assets/img/registrations-avatar/soundeo.jpg";
import avatarFlow from "../../assets/img/registrations-avatar/flow.jpg";

import ButtonMenu from "../buttons/ButtonMenu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faFire,
  faPlay,
  faFileVideo,
  faHistory,
  faVideo,
  faClock,
  faThumbsUp,
  faChevronDown,
  faCog,
  faFlag,
  faQuestionCircle,
  faCommentAlt,
  faFilm,
  faGamepad,
  faSatelliteDish,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

const linksInitial = [
  { description: "Início", icon: faHome },
  { description: "Em Alta", icon: faFire },
  { description: "Inscrições", icon: faPlay },
];

const links = [
  { description: "Biclioteca", icon: faFileVideo },
  { description: "Histórico", icon: faHistory },
  { description: "Seus vídeos", icon: faVideo },
  { description: "Assistir mais tarde", icon: faClock },
  { description: "Vídeos marcado com...", icon: faThumbsUp },
];

const linksRegistrations = [
  { description: "Fish TV Oficial", avatar: avatarFish },
  { description: "Flow", avatar: avatarFlow },
  { description: "Soundeo", avatar: avatarSoundeo },
  { description: "pOkiz Games", avatar: avatarPokiz },
  { description: "mikeymegamega", avatar: avatarMega },
  { description: "Revolution", avatar: avatarArt },
];

const linksMore = [
  { description: "Youtube Premium", icon: faYoutube },
  { description: "Filmes", icon: faFilm },
  { description: "Jogos", icon: faGamepad },
  { description: "Ao vivo", icon: faSatelliteDish },
  { description: "Aprender", icon: faLightbulb },
];

const linksConfig = [
  { description: "Configurações", icon: faCog },
  { description: "Histórico de denúncias", icon: faFlag },
  { description: "Ajuda", icon: faQuestionCircle },
  { description: "Enviar feedback", icon: faCommentAlt },
];

const Menu = () => {
  return (
    <S.ListLinks>
      <S.LinkLogo>
        <ButtonMenu />
        <S.Logo src={Logo} alt="logo" height="45" />
      </S.LinkLogo>
      <S.SplitLink></S.SplitLink>
      {linksInitial.map(({ description, icon }) => (
        <S.Link key={description}>
          <FontAwesomeIcon icon={icon} />
          {description}
        </S.Link>
      ))}
      <S.SplitLink></S.SplitLink>
      {links.map(({ description, icon }) => (
        <S.Link key={description}>
          <FontAwesomeIcon icon={icon} />
          {description}
        </S.Link>
      ))}
      <S.Link>
        <FontAwesomeIcon icon={faChevronDown} />
        Mostrar mais
      </S.Link>
      <S.SplitLink></S.SplitLink>
      <S.TitleGroup>INSCRIÇÕES</S.TitleGroup>
      {linksRegistrations.map(({ description, avatar }) => (
        <S.Link key={description}>
          <S.AvatarRegistration src={avatar} alt="logo" height="55" />
          {description}
        </S.Link>
      ))}
      <S.Link>
        <FontAwesomeIcon icon={faChevronDown} />
        Mostrar mais
      </S.Link>
      <S.SplitLink></S.SplitLink>
      <S.TitleGroup>MAIS DO YOUTUBE</S.TitleGroup>
      {linksMore.map(({ description, icon }) => (
        <S.Link key={description}>
          <FontAwesomeIcon icon={icon} />
          {description}
        </S.Link>
      ))}
      <S.SplitLink></S.SplitLink>
      {linksConfig.map(({ description, icon }) => (
        <S.Link key={description}>
          <FontAwesomeIcon icon={icon} />
          {description}
        </S.Link>
      ))}
    </S.ListLinks>
  );
};

export default Menu;
