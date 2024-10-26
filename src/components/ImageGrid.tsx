import { Container, createStyles, Divider, Image, Modal, SimpleGrid, Title, useMantineTheme } from '@mantine/core'
import React, { useRef, useState } from 'react';
import img1 from '../assets/img/before/P1010801.jpg';
import img2 from '../assets/img/before/P1010805.jpg';
import img3 from '../assets/img/before/P1010808.jpg';
import img7 from '../assets/img/build_phase/PAFU7015.jpg';
import img8 from '../assets/img/build_phase/HZEM0714.jpg';
import img9 from '../assets/img/build_phase/IMG_7625.jpg';
import img10 from '../assets/img/build_phase/IMG_7623.jpg';
import img11 from '../assets/img/build_phase/IMG_7622.jpg';
import img12 from '../assets/img/build_phase/IMG_7624.jpg';
import img13 from '../assets/img/now/Komolo_Oktober_2024.jpg';
import img14 from '../assets/img/now/Komolo_Oktober_2024_2.jpg';
import img15 from '../assets/img/now/Komolo_Oktober_2024_3.jpg';
import img16 from '../assets/img/now/Komolo_Oktober_2024_4.jpg';
import img17 from '../assets/img/now/Komolo_Oktober_2024_5.jpg';
import img18 from '../assets/img/now/Komolo_Oktober_2024_6.jpg';
import img19 from '../assets/img/now/Komolo_Oktober_2024_7.jpg';
import img20 from '../assets/img/now/Komolo_Oktober_2024_8.jpg';
import img21 from '../assets/img/now/Komolo_Oktober_2024_9.jpg';
import img22 from '../assets/img/now/Komolo_Oktober_2024_10.jpg';
import img23 from '../assets/img/now/Komolo_Oktober_2024_11.jpg';
import img24 from '../assets/img/now/Komolo_Oktober_2024_12.jpg';


import { useModals } from '@mantine/modals';

const useStyles = createStyles((theme) => ({
  image: {
    cursor: "pointer"
  }
}));


function ImageGrid() {
  const theme = useMantineTheme();
  const { classes, cx } = useStyles();
  const modal = useModals();
  const currentImage = useRef(img1);
  const [modalOpened, setmodalOpened] = useState(false);

  function showImage(img: string) {
    currentImage.current = img
    setmodalOpened(true);
  }


  return (
    <div style={{ backgroundColor: theme.colors.lightblue[6], paddingTop: "2rem", paddingBottom: "1rem" }}>
      <div className='anchor' id='fotos'></div>

      <Container>
        <Divider pt={10} pb={50} size="lg" color='white' label={<Title order={2} color='white'>Ursprüngliche Schule in Komolo</Title>} labelPosition="center" />
      </Container>

      <SimpleGrid cols={3} pb={20} spacing="xs">
        <div data-aos="zoom-in-right" data-aos-duration="2000">
          <Image src={img1} className={classes.image} onClick={() => { showImage(img1) }}></Image>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="2000">
          <Image src={img2} className={classes.image} onClick={() => { showImage(img2) }}></Image>
        </div>
        <div data-aos="zoom-in-left" data-aos-duration="2000">
          <Image src={img3} className={classes.image} onClick={() => { showImage(img3) }}></Image>
        </div>
      </SimpleGrid>

      <Container>
        <Divider pt={10} pb={50} size="lg" color='white' label={<Title order={2} color='white'>Bau der Satelliten Schule</Title>} labelPosition="center" />
      </Container>

      <SimpleGrid cols={3} pb={20} spacing="xs">
        <div data-aos="zoom-in-right" data-aos-duration="2000">
          <Image src={img7} className={classes.image} onClick={() => { showImage(img7) }}></Image>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="2000">
          <Image src={img8} className={classes.image} onClick={() => { showImage(img8) }}></Image>
        </div>
        <div data-aos="zoom-in-left" data-aos-duration="2000">
          <Image src={img9} className={classes.image} onClick={() => { showImage(img9) }}></Image>
        </div>
        <div data-aos="zoom-in-right" data-aos-duration="2000">
          <Image src={img10} className={classes.image} onClick={() => { showImage(img10) }}></Image>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="2000">
          <Image src={img11} className={classes.image} onClick={() => { showImage(img11) }}></Image>
        </div>
        <div data-aos="zoom-in-left" data-aos-duration="2000">
          <Image src={img12} className={classes.image} onClick={() => { showImage(img12) }}></Image>
        </div>
      </SimpleGrid>

      <Container>
        <Divider pt={10} pb={50} size="lg" color='white' label={<Title order={2} color='white'>Fertige Satelliten Schule</Title>} labelPosition="center" />
      </Container>

      <SimpleGrid cols={3} pb={20} spacing="xs">
        <div data-aos="zoom-in-right" data-aos-duration="2000">
          <Image src={img13} className={classes.image} onClick={() => { showImage(img13) }}></Image>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="2000">
          <Image src={img14} className={classes.image} onClick={() => { showImage(img14) }}></Image>
        </div>
        <div data-aos="zoom-in-left" data-aos-duration="2000">
          <Image src={img15} className={classes.image} onClick={() => { showImage(img15) }}></Image>
        </div>
        <div data-aos="zoom-in-right" data-aos-duration="2000">
          <Image src={img16} className={classes.image} onClick={() => { showImage(img16) }}></Image>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="2000">
          <Image src={img17} className={classes.image} onClick={() => { showImage(img17) }}></Image>
        </div>
        <div data-aos="zoom-in-left" data-aos-duration="2000">
          <Image src={img18} className={classes.image} onClick={() => { showImage(img18) }}></Image>
        </div>
        <div data-aos="zoom-in-right" data-aos-duration="2000">
          <Image src={img19} className={classes.image} onClick={() => { showImage(img19) }}></Image>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="2000">
          <Image src={img20} className={classes.image} onClick={() => { showImage(img20) }}></Image>
        </div>
        <div data-aos="zoom-in-left" data-aos-duration="2000">
          <Image src={img21} className={classes.image} onClick={() => { showImage(img21) }}></Image>
        </div>
        <div data-aos="zoom-in-right" data-aos-duration="2000">
          <Image src={img22} className={classes.image} onClick={() => { showImage(img22) }}></Image>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="2000">
          <Image src={img23} className={classes.image} onClick={() => { showImage(img23) }}></Image>
        </div>
        <div data-aos="zoom-in-left" data-aos-duration="2000">
          <Image src={img24} className={classes.image} onClick={() => { showImage(img24) }}></Image>
        </div>
      </SimpleGrid>

      <Modal opened={modalOpened} onClose={() => { setmodalOpened(false) }} centered size="xl">
        <Image src={currentImage.current} />
      </Modal>
    </div>
  )
}

export default ImageGrid