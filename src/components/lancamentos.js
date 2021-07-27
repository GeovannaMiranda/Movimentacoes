import React from 'react';
import { Container, Row, Col, FormGroup, Form} from 'reactstrap';
import { TextField, Card, CardActions, CardContent, Button, Typography, InputLabel, Select, MenuItem } from '@material-ui/core';
import {StickyTable, Rows, Cell} from 'react-sticky-table';

const lancamentos = (props) => {

    return (
        <div>

            <Container className="container-theme fonte" fluid={true} id="corpo" >
                <CardActions>
                    <Button style={{ margin: '0 0 0 95%', background: '#007bff', color: 'white' }} size="medium">Salvar</Button>
                </CardActions>
                <Card>
                    <CardContent>
                        <Form>
                            <Row>
                                <Col>
                                    <FormGroup style={{ margin: '0 0 0 1%' }} id="grupo">
                                        <Typography style={{ fontSize: "25px" }} color="textSecondary" gutterBottom>
                                            Cadastro
                                        </Typography>
                                        <Col md={4}>
                                            <InputLabel required style={{ width: "10%", margin: '4% 0 0 0' }}>Documento</InputLabel>
                                            <TextField
                                                size="small"
                                                type="text"
                                            />
                                        </Col>
                                    </FormGroup>
                                    <Col >
                                        <FormGroup style={{ width: "50%", margin: '-3.5% 0 0 75%' }} id="grupo">
                                            <InputLabel required>Data</InputLabel>
                                            <TextField
                                                size="small"
                                                type="date"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup style={{ width: "10%", margin: '-3.5% 0 0 90%' }} id="grupo">
                                            <InputLabel required>Hora</InputLabel>
                                            <TextField
                                                size="small"
                                                type="time"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Col>
                            </Row>
                        </Form>
                        <Form>
                            <Row>
                                <Col>
                                    <Col>
                                        <FormGroup style={{ width: "15%", margin: '15% 0 0 1%' }} id="grupo1">
                                            <InputLabel required>Vendedor</InputLabel>
                                            <TextField
                                                size="small"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col >
                                        <FormGroup style={{ margin: '-3.7% 0 0 18%' }} id="grupo1">
                                            <InputLabel >Tipo</InputLabel>
                                            <Select
                                                size="small"
                                                type="text"
                                                style={{ width: "15%" }}
                                            >
                                                <MenuItem value="">
                                                    <em>Selecione Opção</em>

                                                </MenuItem>
                                                <MenuItem value="1">ENTRADA</MenuItem>
                                                <MenuItem value="2">DEVOLUÇÃO</MenuItem>
                                            </Select>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup style={{ width: "20%", margin: '-3.5% 0 0 33%' }} id="grupo1">
                                            <InputLabel >Origem</InputLabel>
                                            <TextField
                                                size="small"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Col>
                            </Row>
                        </Form>

                        <Card style={{ margin: '5% 0 0 0', width: "70%" }}>
                            <CardContent>
                                <Form>
                                    <Row>
                                        <Col>
                                            <InputLabel id="grupo2" required>Cancelado</InputLabel>
                                            <Select
                                                size="small"
                                                label="Cancelado"
                                                style={{ width: "15%" }}
                                            >
                                                <MenuItem value="">
                                                    <em>Selecione Opção</em>

                                                </MenuItem>
                                                <MenuItem value="1">SIM</MenuItem>
                                                <MenuItem value="0">NÃO</MenuItem>
                                            </Select>
                                        </Col>
                                        <Col>
                                            <FormGroup id="grupo2" style={{ margin: '-5.5% 0 0 17%' }}>
                                                <InputLabel required>Bloqueado</InputLabel>
                                                <Select
                                                    size="small"
                                                    label="Bloqueado"
                                                    style={{ width: "18%" }}
                                                >
                                                    <MenuItem value="">
                                                        <em>Selecione Opção</em>
                                                    </MenuItem>
                                                    <MenuItem value="1">SIM</MenuItem>
                                                    <MenuItem value="0">NÃO</MenuItem>
                                                </Select>
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup id="grupo2" style={{ width: "20%", margin: '-5.1% 0 0 34%' }}>
                                                <InputLabel required>Itens</InputLabel>
                                                <TextField
                                                    size="small"
                                                    type="text"

                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup id="grupo2" style={{ width: "20%", margin: '-5.1% 0 0 56%' }}>
                                                <InputLabel required>Altereções</InputLabel>
                                                <TextField
                                                    size="small"
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup id="grupo2" style={{ width: "20%", margin: '-5% 0 0 78%' }}>
                                                <InputLabel required>Operador</InputLabel>
                                                <TextField
                                                    size="small"
                                                    type="text"

                                                />
                                            </FormGroup>
                                        </Col>

                                    </Row>
                                </Form>
                            </CardContent>
                        </Card>
                        <Col>
                            <FormGroup style={{ width: "15%", margin: '-10% 0 0 80%' }}>
                                <InputLabel required>Descontos</InputLabel>
                                <TextField
                                    size="small"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup style={{ width: "15%", margin: '4% 0 0 80%' }}>
                                <InputLabel required>Operador</InputLabel>
                                <TextField
                                    size="small"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <StickyTable style={{margin: '5% 0 0 0', width: '111%', height: '100px', fontFamily: "Roboto, sans-serif"}}>
                                <Rows>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>Documento</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>Fornecedor</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>Item</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>D. Básica</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>Quantidade</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>Preço</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>Desconto</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>Total</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>Operador</Cell>
                                    <Cell style={{ background: '#007bff', color: 'white' }}>Alteração</Cell>
                                </Rows>                                
                                    <Rows>
                                        <Cell></Cell>
                                    </Rows>
                            </StickyTable>
                        </Col>
                    </CardContent>
                </Card >
            </Container >
        </div >
    );
}
export default lancamentos;