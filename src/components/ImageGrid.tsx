import { createStyles, Image, Modal, SimpleGrid, useMantineTheme } from '@mantine/core'
import React, { useRef, useState } from 'react';
import img1 from '../assets/img/schule/P1010805.jpg';
import img2 from '../assets/img/schule/P1010798.jpg';
import img3 from '../assets/img/schule/P1010808.jpg';
import img4 from '../assets/img/schule/P1010810.jpg';
import img5 from '../assets/img/schule/Schulstart2.jpg';
import img6 from '../assets/img/schule/Schulstart1.jpg';

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