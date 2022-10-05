import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styles from '../Home/Categories.module.css'

export default function Categories(){
    return(
        <Container fluid className={`${styles.containerProducts} bg-dark text-center`}>
            <h1 className={styles.headingProducts}>CATEGORIES</h1>
            <Row sm={1} md={3} className={`${styles.rowProducts} px-0`}>
                <Col className={styles.colProducts}>
                    <Card className={styles.cardProducts}> 
                        <Card.Img className={styles.imageProducts} src={require('../../images/1.jpg')}/>
                        <Card.ImgOverlay className="d-flex justify-content-center">
                            <Button className={`${styles.cardButtonProducts} mt-auto rounded-pill btn-light`} href='#!'>Oversized Tshirts</Button>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col className={styles.colProducts}>
                    <Card className={styles.cardProducts}>
                        <Card.Img className={styles.imageProducts} src={require('../../images/1.jpg')} />
                        <Card.ImgOverlay className="d-flex justify-content-center">
                            <Button className={`${styles.cardButtonProducts} mt-auto rounded-pill btn-light`} href='#!'>Graphic Tshirts</Button>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col className={styles.colProducts}>
                    <Card className={styles.cardProducts}>
                        <Card.Img className={styles.imageProducts} src={require('../../images/1.jpg')} />
                        <Card.ImgOverlay className="d-flex justify-content-center">
                            <Button className={`${styles.cardButtonProducts} mt-auto rounded-pill btn-light`} href='#!'>Polo Tshirts</Button>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
            <Row sm={1} md={3} className={`${styles.rowProducts} px-0`}>
                <Col className={styles.colProducts}>
                    <Card className={styles.cardProducts}>
                        <Card.Img className={styles.imageProducts} src={require('../../images/1.jpg')} />
                        <Card.ImgOverlay className="d-flex justify-content-center">
                            <Button className={`${styles.cardButtonProducts} mt-auto rounded-pill btn-light`} href='#!'>Hoodies</Button>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col className={styles.colProducts}>
                    <Card className={styles.cardProducts}>
                        <Card.Img className={styles.imageProducts} src={require('../../images/1.jpg')} />
                        <Card.ImgOverlay className="d-flex justify-content-center">
                            <Button className={`${styles.cardButtonProducts} mt-auto rounded-pill btn-light`} href='#!'>Cargo pants</Button>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col className={styles.colProducts}>
                    <Card className={styles.cardProducts}>
                        <Card.Img className={styles.imageProducts} src={require('../../images/1.jpg')} />
                        <Card.ImgOverlay className="d-flex justify-content-center">
                            <Button className={`${styles.cardButtonProducts} mt-auto rounded-pill btn-light`} href='#!'>Accessories</Button>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}