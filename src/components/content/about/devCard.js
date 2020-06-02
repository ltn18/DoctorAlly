import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Link } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
    fontFamily: "Faustina",
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    fontFamily: "Faustina",
  },
  media: {
    height: 250,
  },
  font: {
    fontFamily: "Faustina",
  },
  facebookLink: {
    color: "#1778F2",
  },
  instagramLink: {
    color: "#c32aa3",
  },
  linkedinLink: {
    color: "#007bb5",
  },
  gmailLink: {
    color: "#B23121",
  },
  name: {
    fontSize: '30px',
  },
  role: {
    color: 'rgba(0,0,0,0.54)',
  }
});

const DATA = [
  {
    id: 1,
    name: "Phú Mạnh",
    role: "Full Stack Developer",
    imgURL: "phumanh.jpg",
    facebookLink: "https://www.facebook.com/doctorally.project/",
    instagramLink: "https://www.instagram.com/doctorally.project/",
    linkedinLink: "https://www.linkedin.com/company/doctorally/",
    gmailLink: "mailto:doctorally.project@gmail.com",
  },
  {
    id: 2,
    name: "Nhật Quang",
    role: "Full Stack Developer",
    imgURL: "nhatquang.jpg",
    facebookLink: "https://www.facebook.com/quang.sot.1412",
    instagramLink: "https://www.instagram.com/quang.sot.1412/",
    linkedinLink: "",
    gmailLink: "mailto:nnquang.1412@gmail.com",
  },
  {
    id: 3,
    name: "Hoàng Lâm",
    role: "Full Stack Developer",
    imgURL: "hoanglam.jpg",
    facebookLink: "https://www.facebook.com/hoanglam.295/",
    instagramLink: "https://www.instagram.com/lam.nguyen.cc/",
    linkedinLink: "https://www.linkedin.com/in/nguyentamhoanglam/",
    gmailLink: "mailto:nguyentamhoanglam@gmail.com",
  },
  {
    id: 4,
    name: "Hoàng Minh",
    role: "Full Stack Developer",
    imgURL: "hoangminh.jpg",
    facebookLink: "https://www.facebook.com/nhminh.mgf",
    instagramLink: "https://www.instagram.com/h0___og.minhng/",
    linkedinLink: "",
    gmailLink: "mailto:nguyenhoangminh191202@gmail.com",
  },
  // {
  //   id: 5,
  //   name: "Hồng Minh",
  //   role: "Product Designer",
  //   imgURL: "hongminh.jpg",
  //   facebookLink: "https://www.facebook.com/hongminh4402",
  //   instagramLink: "https://www.instagram.com/hongminh4402/",
  //   linkedinLink: "",
  //   gmailLink: "mailto:hongminh4402@gmail.com",
  // },
  // {
  //   id: 6,
  //   name: "Tuấn Hoàng",
  //   role: "Business Strategist",
  //   imgURL: "tuanhoang.jpg",
  //   facebookLink: "https://www.facebook.com/nthoang84",
  //   instagramLink: "https://www.instagram.com/tuaanhoang84/",
  //   linkedinLink: "https://www.linkedin.com/in/nthoang84/",
  //   gmailLink: "mailto:tuanhoang.nguyen8402@gmail.com",
  // },
];

const DevCard = (props) => {
  const classes = useStyles();
  const {
    name,
    role,
    imgURL,
  } = props;
  return (
    <div className={classes.root}>
      <img src={imgURL} className={classes.media} alt="Day la anh"/>
      <strong className={classes.name}>{name}</strong>
      <strong className={classes.role}>{role}</strong>
    </div>
  );
};

const Devs = () => {
  const classes = useStyles();

  return (
    <Container max-width="sm" className={classes.container}>
      {DATA.map((item) => (
        <DevCard
          name={item.name}
          role={item.role}
          imgURL={item.imgURL}
          facebookLink={item.facebookLink}
          instagramLink={item.instagramLink}
          linkedinLink={item.linkedinLink}
          gmailLink={item.gmailLink}
        />
      ))}
    </Container>
  );
};

export default Devs;
