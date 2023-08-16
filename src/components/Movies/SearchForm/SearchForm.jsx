import Form from '../../Form/Form';
import Input from '../../Form/Input/Input';
import { useState } from 'react';
import './SearchForm.css';

const SearchForm = () => {
  const [valueSerch, setValueSerch] = useState({});

  function handleChange(evt) {
    setValueSerch({ ...valueSerch, [evt.target.name]: evt.target.value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <section>
      <Form name={'search'} onSubmit={handleSubmit}>
        <Input
          value={valueSerch.name}
          handleChange={handleChange}
          type={'search'}
          placeholder={'Фильм'}
          required
          name={'search'}
          form={'search'}
        />
        <Input
          value={valueSerch.name}
          handleChange={handleChange}
          type={'checkbox'}
          label={'Короткометражки'}
          name={'short'}
          form={'search'}
        />
      </Form>
    </section>
  );
};

export default SearchForm;
