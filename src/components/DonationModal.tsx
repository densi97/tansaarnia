import { Button, Center, Divider, Modal, Text, Title } from '@mantine/core'
import React from 'react'

function DonationModal({modalOpen, setModalOpen}: {modalOpen: boolean, setModalOpen: (b: boolean) => void}) {
  return (
    <>
        <Modal opened={modalOpen} onClose={() => {setModalOpen(false)}} centered size="lg">
            <div>
	    		<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
					<input type="hidden" name="cmd" value="_s-xclick" />
					<input type="hidden" name="hosted_button_id" value="BPJGDVEJJAL5E" />
                    <Center>
                        <Button id="donation-btn" type="submit" className="btn btn-primary btn-xl" value="Spenden via PayPal oder Kreditkarte" name="submit" title="PayPal - The safer, easier way to pay online!">
                            SPENDEN VIA PAYPAL ODER KREDITKARTE
                        </Button>
                    </Center>
				</form>
                <Divider my={20} />
                <Title order={2} align="center">Spenden via Banküberweisung:</Title>
                <Text size="md" my={20} align="center">
                    Empfänger: <b>Reiner Meutsch Stiftung Fly & Help</b><br />
                    IBAN: <b>DE 94 5739 1800 0000 0055 50</b><br />
                    BIC: <b>GENODE51WW1</b><br />
                    Verwendungszweck 1: <b>TanSAARnia</b><br />
                    Verwendungszweck 2: <b>Adresse des Spenders</b><br />
                    (Die Adresse des Spenders wird benötigt, damit eine Spendenbescheinigung ausgestellt werden kann)<br />
                    Ab einer Spende von über 50€ gibt es eine Spendenquittung.
                </Text>
	    	</div>  
        </Modal>
    </>
  )
}

export default DonationModal