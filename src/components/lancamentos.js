import React, { useState } from 'react';
import './lancamentos.css'
import { Container, Form } from 'reactstrap';
import { TextField, Card,Button, Typography, InputLabel, Select, MenuItem } from '@material-ui/core';
import { StickyTable, Rows, Cell } from 'react-sticky-table';

const Lancamentos = (props) => {
    const [cadastro, setCadastro] = useState(null);

    function onChange1(ev) {
        const {
            nome, value
        } = ev.target
        setCadastro(value)
        console.log(value)
    }

    const [data, setData] = useState(null);

    function onChange2(ev) {
        const {
            nome, value
        } = ev.target
        setData(value)
        console.log(value)
    }

    const [hora, setHora] = useState(null);

    function onChange3(ev) {
        const {
            nome, value
        } = ev.target
        setHora(value)
        console.log(value)
    }

    const [vendedor, setVendedor] = useState(null);

    function onChange4(ev) {
        const {
            nome, value
        } = ev.target
        setVendedor(value)
        console.log(value)
    }

    const [tipo, setTipo] = useState(null);
    const [isActive, setIsActive] = useState(false);

    function onChange5(ev) {
        const { name, value } = ev.target;
        setTipo(value); console.log(value);
        if (ev !== '') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    const [origem, setOrigem] = useState(null);

    function onChange6(ev) {
        const {
            nome, value
        } = ev.target
        setOrigem(value)
        console.log(value)
    }

    const [cancelado, setCancelado] = useState(null);
    const [isActive1, setIsActive1] = useState(false);

    function onChange7(ev) {
        const { name, value } = ev.target;
        setCancelado(value); console.log(value);
        if (ev !== '') {
            setIsActive1(true);
        } else {
            setIsActive1(false);
        }
    }

    const [bloqueado, setBloqueado] = useState(null);
    const [isActive2, setIsActive2] = useState(false);

    function onChange8(ev) {
        const { name, value } = ev.target;
        setBloqueado(value); console.log(value);
        if (ev !== '') {
            setIsActive2(true);
        } else {
            setIsActive2(false);
        }
    }

    const [item, setItem] = useState(null);

    function onChange9(ev) {
        const {
            nome, value
        } = ev.target
        setItem(value)
        console.log(value)
    }

    const [alteracao, setAlteracao] = useState(null);

    function onChange10(ev) {
        const {
            nome, value
        } = ev.target
        setAlteracao(value)
        console.log(value)
    }

    const [operacao, setOperacao] = useState(null);

    function onChange11(ev) {
        const {
            nome, value
        } = ev.target
        setOperacao(value)
        console.log(value)
    }

    const [desconto, setDesconto] = useState(null);

    function onChange12(ev) {
        const {
            nome, value
        } = ev.target
        setDesconto(value)
        console.log(value)
    }

    const [total, setTotal] = useState(null);

    function onChange13(ev) {
        const {
            nome, value
        } = ev.target
        setTotal(value)
        console.log(value)
    }


    {/*const [tabela, setTabela] = useState(null);

    const tabelalancamento = useCallback(() => {
        api.get().then(response => {
            setTabela(response.data)


        })
    }, [ ]);

    const [combocodigo, setCombocodigo] = useState([]);
    useEffect(() => {
        api.get(`combocodigo/${}/`).then(response => {
            setCombocodigo(response.data)

        })
    }, []);*/}


    return (
        <div className="Geral">
            <Container className="container-theme fonte" fluid={true} id="corpo" >
                <Button style={{ margin: '0 0 0 95%', background: '#007bff', color: 'white' }} size="medium">Salvar</Button>
                <div className="geralCard">
                    <Card className="card1">

                        <Form className="estilo">
                            <Typography style={{ fontSize: "25px" }} color="textSecondary" gutterBottom>
                                Cadastro
                            </Typography>
                        </Form>

                        <div className="campo1">
                            <Form>
                                <InputLabel required >Documento</InputLabel>
                                <TextField
                                    size="small"
                                    type="text"
                                    onChange={onChange1}
                                />

                            </Form>
                            <Form className="dataHora">
                                <div>
                                    <InputLabel required>Data</InputLabel>
                                    <TextField
                                        size="small"
                                        type="date"
                                        onChange={onChange2}

                                    />
                                </div>
                                <div>
                                    <InputLabel required>Hora</InputLabel>
                                    <TextField
                                        size="small"
                                        type="time"
                                        onChange={onChange3}
                                    />
                                </div>
                            </Form>
                        </div>
                        <div className="campo">
                            <Form>
                                <InputLabel required>Vendedor</InputLabel>
                                <TextField
                                    size="small"
                                    type="text"
                                    onChange={onChange4}
                                />
                            </Form>
                            <Form className="vendto">
                                <div>
                                    <InputLabel >Tipo</InputLabel>
                                    <Select
                                        size="small"
                                        type="text"
                                        onChange={onChange5}
                                    >
                                        <MenuItem value="">
                                            <em>Selecione Opção</em>

                                        </MenuItem>
                                        <MenuItem value="1">ENTRADA</MenuItem>
                                        <MenuItem value="2">DEVOLUÇÃO</MenuItem>
                                    </Select>
                                </div>
                                <div>
                                    <InputLabel >Origem</InputLabel>
                                    <TextField
                                        size="small"
                                        type="text"
                                        onChange={onChange6}
                                    />
                                </div>
                            </Form>

                        </div>

                        <div className="estilocard">
                            <Card className="card2">
                                <div className="campo2">
                                    <Form>
                                        <InputLabel id="grupo2" required>Cancelado</InputLabel>
                                        <Select
                                            size="small"
                                            label="Cancelado"
                                            onChange={onChange7}
                                        >
                                            <MenuItem value="">
                                                <em>Selecione Opção</em>

                                            </MenuItem>
                                            <MenuItem value="1">SIM</MenuItem>
                                            <MenuItem value="0">NÃO</MenuItem>
                                        </Select>
                                    </Form>
                                    <Form>
                                        <InputLabel required>Bloqueado</InputLabel>
                                        <Select
                                            size="small"
                                            label="Bloqueado"

                                            onChange={onChange8}

                                        >
                                            <MenuItem value="">
                                                <em>Selecione Opção</em>
                                            </MenuItem>
                                            <MenuItem value="1">SIM</MenuItem>
                                            <MenuItem value="0">NÃO</MenuItem>
                                        </Select>
                                    </Form>
                                    <Form>
                                        <InputLabel required>Itens</InputLabel>
                                        <TextField
                                            size="small"
                                            type="text"
                                            onChange={onChange9}

                                        />
                                    </Form>

                                    <Form>
                                        <InputLabel required>Altereções</InputLabel>
                                        <TextField
                                            size="small"
                                            type="text"
                                            onChange={onChange10}
                                        />
                                    </Form>
                                    <Form>
                                        <InputLabel required>Operador</InputLabel>
                                        <TextField
                                            size="small"
                                            type="text"
                                            onChange={onChange11}

                                        />
                                    </Form>
                                </div>
                            </Card>
                            <div className="campo3">
                                <Form className="desctotal">
                                    <div>
                                        <InputLabel required>Descontos</InputLabel>
                                        <TextField
                                            size="small"
                                            type="text"
                                            onChange={onChange12}
                                        />
                                    </div>
                                    <div>

                                        <InputLabel required>Total</InputLabel>
                                        <TextField
                                            size="small"
                                            type="text"
                                            onChange={onChange13}
                                        />
                                    </div>
                                </Form>
                            </div>
                        </div>
                        <div className="campo2">
                            <Form>
                                <StickyTable style={{ margin: '5% 0 0 0', width: '111%', height: '100px', fontFamily: "Roboto, sans-serif" }}>
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
                            </Form>
                        </div>
                    </Card >
                </div >
            </Container >
        </div >
    );
}
export default Lancamentos;