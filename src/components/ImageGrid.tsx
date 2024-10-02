import { Container, createStyles, Divider, Image, Modal, SimpleGrid, Title, useMantineTheme } from '@mantine/core'
import React, { useRef, useState } from 'react';
import img1 from '../assets/img/schule/progress/PAFU7015.jpg';
import img2 from '../assets/img/schule/progress/HZEM0714.jpg';
import img3 from '../assets/img/schule/progress/IMG_7625.jpg';
import img4 from '../assets/img/schule/progress/IMG_7623.jpg';
import img5 from '../assets/img/schule/progress/IMG_7622.jpg';
import img6 from '../assets/img/schule/progress/IMG_8023.jpg';


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
    <div style={{ backgroundColor: theme.colors.lightblue[6] }}>
      <div className='anchor' id='fotos'></div>

      <Container>
        <Divider pt={10} pb={50} size="lg" color='white' label={<Title order={2} color='white'>Fotos</Title>} labelPosition="center" />
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
        <div data-aos="zoom-in-right" data-aos-duration="2000">
          <Image src={img4} className={classes.image} onClick={() => { showImage(img4) }}></Image>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="2000">
          <Image src={img5} className={classes.image} onClick={() => { showImage(img5) }}></Image>
        </div>
        <div data-aos="zoom-in-left" data-aos-duration="2000">
          <Image src={img6} className={classes.image} onClick={() => { showImage(img6) }}></Image>
        </div>
      </SimpleGrid>
      <Modal opened={modalOpened} onClose={() => { setmodalOpened(false) }} centered size="xl">
        <Image src={currentImage.current} />
      </Modal>
    </div>
  )
}

export default ImageGrid