import Typography from "@mui/material/Typography";
import Carousel from "react-material-ui-carousel";
import { CarouselItem } from "../../../../components/CarouselItem";
import {
  TestimonialsContainer,
  TestimonialsCarrousel,
} from "./styles";


export function Testimonial() {
  const carrouselItems = [
    {
      text: "Lorem1 ipsum dolor sit amet. Aut pariatur quaerat sit delectus fugit aut quasi explicabo ut veniam inventore. Non fugiat temporibus aut odit ipsam odio .\n Non suscipit eius est sint totam non quam nisi. Eum iure blanditiis qui sint quidem cum fuga illum id velit sint sed quibusdam?",
      title: "LOREM IPSUM DOLOR SITES IPSUM AMET1",
      name: "Loremipso1",
      companyName: "CEO GetNextDesign ",
    },
    {
      text: "Lorem2 ipsum dolor sit amet. Aut pariatur quaerat sit delectus fugit aut quasi explicabo ut veniam inventore. Non fugiat temporibus aut odit ipsam odio .\n Non suscipit eius est sint totam non quam nisi. Eum iure blanditiis qui sint quidem cum fuga illum id velit sint sed quibusdam?",
      title: "LOREM IPSUM DOLOR SITES IPSUM AMET1",
      name: "Loremipso2",
      companyName: "CEO GetNextDesign ",
    },
    {
      text: "Lorem3 ipsum dolor sit amet. Aut pariatur quaerat sit delectus fugit aut quasi explicabo ut veniam inventore. Non fugiat temporibus aut odit ipsam odio .\n Non suscipit eius est sint totam non quam nisi. Eum iure blanditiis qui sint quidem cum fuga illum id velit sint sed quibusdam?",
      title: "LOREM IPSUM DOLOR SITES IPSUM AMET1",
      name: "Loremipso3",
      companyName: "CEO GetNextDesign ",
    },
  ];
  return (
    <>
      <TestimonialsContainer>
      <Typography variant="h6" fontSize="14px" fontWeight="700" lineHeight="17px" color="#3734A9" textTransform="uppercase">
          Testemunhal
        </Typography>
        <Typography variant="h4" fontSize="40px" fontWeight="800" lineHeight="52px" marginTop="16px">
          Confira o que os nossos<br></br> clientes estão falando!
        </Typography>

        <TestimonialsCarrousel>
          <Carousel
            height="388px"
            navButtonsProps={{
              style: {
                backgroundColor: "#021442",
                color: "#eaeaea",
              },
            }}
            activeIndicatorIconButtonProps={{
              style: {
                color: "#E30B22",
              },
            }}
            animation="slide"
          >
            {carrouselItems.map((item, index) => (
              <CarouselItem
                text={item.text}
                title={item.title}
                name={item.name}
                companyName={item.companyName}
                key={index}
              />
            ))}
          </Carousel>
        </TestimonialsCarrousel>
      </TestimonialsContainer>
    </>
  );
}
