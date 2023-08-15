import Modal from 'react-modal';
import closeModal from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import { Container, RadioBox, TransctionTypeContainer } from './styles';
import { FormEvent, useState } from 'react';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps) {

    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [ type, setType ] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        console.log(
            {title,
            value,
            category,
            type
        }
        )
    }
    
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}   
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
        
        <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
        >
            <img src={closeModal} alt="Fechar modal" />
        </button>

        <Container onSubmit={handleCreateNewTransaction}>      
        <h2>Cadastrar transação</h2>

        <input
          placeholder='Titulo' 
          value={title}
          onChange={event => setTitle(event.target.value)} 
        />
        <input 
            type='number' 
            placeholder='Valor'
            value={value}
            onChange={event => setValue(Number(event.target.value))} 
         />

        <TransctionTypeContainer>
            <RadioBox
                type='button'
                onClick={()=>{ setType('deposit');}}
                isActive={type === 'deposit'}
                activeColor='green'
            >
                <img src={income} alt="Entrada" />
                <span>Entrada</span>
            </RadioBox>

            <RadioBox
                type='button'
                onClick={()=>{ setType('withdraw');}}
                isActive={type === 'withdraw'}
                activeColor='red'
            >
                <img src={outcome} alt="Saida" />
                <span>Saída</span>
            </RadioBox>
        </TransctionTypeContainer>

        <input 
            placeholder='Categoria' 
            value={category}
            onChange={event => setCategory(event.target.value)} 
        />

        <button type='submit'>
            Cadastrar
        </button>
        </Container>    
        </Modal>
    )
}