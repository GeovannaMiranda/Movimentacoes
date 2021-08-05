import React, { useState, useCallback } from 'react';
import api from '../../api';
import moment from 'moment';
import { Row, Col, Form, FormGroup, Container } from 'reactstrap';
import { InputLabel, Card, CardContent, TextField, Button, CardActions, Table, MenuItem, Select } from '@material-ui/core';
import { StickyTable, Rows, Cell } from 'react-sticky-table';



const Localizar = (props) => {

    const [documento, setDocumento] = useState(null);

    function onChange1(ev) {
        const {
            nome, value
        } = ev.target
        setDocumento(value)
        console.log(value)
    }



    const [data, setData] = useState(null);

    function onChange2(ev) {
        const {
            nome, value
        } = ev.target
        setData(value)

    }

    const [documento1, setDocumento1] = useState(null);

    function onChange3(ev) {
        const {
            nome, value
        } = ev.target
        setDocumento1(value)

    }


    const [data1, setData1] = useState(null);

    function onChange4(ev) {
        const {
            nome, value
        } = ev.target
        setData1(value)

    }

    const [documento2, setDocumento2] = useState(null);

    function onChange5(ev) {
        const {
            nome, value
        } = ev.target
        setDocumento2(value)

    }


    const [data2, setData2] = useState(null);

    function onChange6(ev) {
        const {
            nome, value
        } = ev.target
        setData2(value)

    }


    const dataform = moment(data).format("YYYYMMDD");
    console.log(dataform);

    const [locallan, setLocallan] = useState([]);
    console.log(locallan);

    const localizarlan = useCallback(() => {
        api.get(`consultadfmovimentacoes/${documento}/${dataform}`).then(response => {
            setLocallan(response.data)

        })
    }, [documento, dataform]);

    const [locallanent, setLocallanent] = useState([]);
    console.log(locallan);

    const localizarent = useCallback(() => {
        api.get(`consultaentmovimentacoes/${documento}/${dataform}`).then(response => {
            setLocallanent(response.data)

        })
    }, [documento, dataform]);


    return (
        <div>
            <Container className="themed-container" fluid="md">
                <Button style={{ margin: '0 0 0 95%', background: '#007bff', color: 'white', marginBottom: "5px" }} size="medium">Salvar</Button>
                    {/* O card é como se fosse o meu body ele define quantas linhas o meu corpo terá */}
                    <Card style={{display: 'grid', gridTemplateColumns: '1fr',gridTemplateRows: '100vh', padding: '20px' }}>
                        {/* Essa div ela abraça todas as outras divs, para que ela defina quantas linhas vai ter dentro do corpo */}
                        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '20vh 5vh 30vh' }}>
                            {/* Essas divs individuais ira mexer apenas no que tem dentro de cada para posicionar em cada linha/coluna */}
                            <div style={{gridColumn: '1/4'}}>
                                <InputLabel>Localizar</InputLabel>
                                <Select
                                    style={{margin: '0.5% 0 0 0', width: '15%' }}
                                >
                                    <MenuItem default value="">Selecione Opção</MenuItem>
                                    <MenuItem value="1">Entradas</MenuItem>
                                    <MenuItem value="2">Devoluções</MenuItem>
                                </Select>
                            </div>
                            <div style={{gridColumn: '1/2'}} >
                                <InputLabel>Documento</InputLabel>
                                <TextField

                                    size="small"
                                    type="text"
                                    style={{margin: '3% 0 0 0',  width: '50%' }}
                                    onChange={onChange1}
                                />
                            </div>
                            <div style={{gridColumn: '2/3'}}>
                                <InputLabel>Data</InputLabel>
                                <TextField
                                    size="small"
                                    type="date"
                                    style={{ margin: '3% 0 0 0 ', width: '50%' }}
                                    onChange={onChange2}
                                />
                            </div>
                            <div style={{gridColumn: '1/3'}}>
                                <Button onClick={localizarlan} style={{ margin: '5% 0 0 0', background: '#007bff', color: 'white' }} size="medium">Buscar</Button>
                            </div>
                            <div style={{gridColumn: '1/3'}}>
                                <Table>
                                    <thead style={{ color: 'white', fontFamily: 'Roboto, sans-serif', height: '45px' }}>
                                        <tr>
                                            <th style={{ background: '#007bff', color: 'white' }}> # </th>
                                            <th style={{ background: '#007bff', color: 'white' }}> Documento</th>
                                            <th style={{ background: '#007bff', color: 'white' }}> Data</th>
                                            <th style={{ background: '#007bff', color: 'white' }}> Hora</th>
                                            <th style={{ background: '#007bff', color: 'white' }}> Total Geral</th>
                                            <th style={{ background: '#007bff', color: 'white' }}> Total Itens </th>
                                        </tr>
                                    </thead>
                                    {locallan.map((locallan, idx) => (
                                        <tbody style={{ fontFamily: 'Roboto, sans-serif' }} key={idx} locallan={locallan}>
                                            <tr style={{ textalign: "center" }}>
                                                <th> {(parseInt(idx) + 1)}  </th>
                                                <td> {locallan.documento}</td>
                                                <td> {locallan.data.substring(0, 10)}</td>
                                                <td> {locallan.hora}</td>
                                                <td> {locallan.totalgeral} </td>
                                                <td> {locallan.totalitens}</td>
                                            </tr>
                                        </tbody>
                                    ))}
                                </Table>
                            </div>
                        </div>

                          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '20vh 5vh 30vh' }}>
                            <div style={{gridColumn: '1/4'}}>
                                <InputLabel>Localizar</InputLabel>
                                <Select
                                    style={{margin: '0.5% 0 0 0', width: '15%' }}
                                >
                                    <MenuItem default value="">Selecione Opção</MenuItem>
                                    <MenuItem value="1">Entradas</MenuItem>
                                    <MenuItem value="2">Devoluções</MenuItem>
                                </Select>
                            </div>
                            <div style={{gridColumn: '1/2'}} >
                                <InputLabel>Documento</InputLabel>
                                <TextField

                                    size="small"
                                    type="text"
                                    style={{margin: '3% 0 0 0',  width: '50%' }}
                                    onChange={onChange1}
                                />
                            </div>
                            <div style={{gridColumn: '2/3'}}>
                                <InputLabel>Data</InputLabel>
                                <TextField
                                    size="small"
                                    type="date"
                                    style={{ margin: '3% 0 0 0 ', width: '50%' }}
                                    onChange={onChange2}
                                />
                            </div>
                            <div style={{gridColumn: '1/3'}}>
                                <Button onClick={localizarlan} style={{ margin: '5% 0 0 0', background: '#007bff', color: 'white' }} size="medium">Buscar</Button>
                            </div>
                            <div style={{gridColumn: '1/3'}}>
                                <Table>
                                    <thead style={{ color: 'white', fontFamily: 'Roboto, sans-serif', height: '45px' }}>
                                        <tr>
                                            <th style={{ background: '#007bff', color: 'white' }}> # </th>
                                            <th style={{ background: '#007bff', color: 'white' }}> Documento</th>
                                            <th style={{ background: '#007bff', color: 'white' }}> Data</th>
                                            <th style={{ background: '#007bff', color: 'white' }}> Hora</th>
                                            <th style={{ background: '#007bff', color: 'white' }}> Total Geral</th>
                                            <th style={{ background: '#007bff', color: 'white' }}> Total Itens </th>
                                        </tr>
                                    </thead>
                                    {locallan.map((locallan, idx) => (
                                        <tbody style={{ fontFamily: 'Roboto, sans-serif' }} key={idx} locallan={locallan}>
                                            <tr style={{ textalign: "center" }}>
                                                <th> {(parseInt(idx) + 1)}  </th>
                                                <td> {locallan.documento}</td>
                                                <td> {locallan.data.substring(0, 10)}</td>
                                                <td> {locallan.hora}</td>
                                                <td> {locallan.totalgeral} </td>
                                                <td> {locallan.totalitens}</td>
                                            </tr>
                                        </tbody>
                                    ))}
                                </Table>
                            </div>
                        </div>
                    </Card>
            </Container>
        </div >
    );
}

export default Localizar;