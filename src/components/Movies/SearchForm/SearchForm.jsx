import Form from '../../Form/Form';
import Input from '../../Form/Input/Input';
import './SearchForm.css';
import { DEVICE_SETTING } from '../../../utils/constants';

const SearchForm = ({
  isSavedMoviesPage,
  onSubmitSearch,
  valueSerch,
  setValueSerch,
  device,
  setMaxMovies,
  searchStatus,
  isFormActivated,
}) => {
  const submit = (values) => {
    onSubmitSearch(values);
    !isSavedMoviesPage && setMaxMovies(DEVICE_SETTING[device].maxMovies);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submit(valueSerch);
  };

  const handleChangeCheckbox = (evt) => {
    setValueSerch((valueSerch) => {
      return { ...valueSerch, [evt.target.name]: evt.target.checked };
    });

    if (!isSavedMoviesPage && searchStatus.isFirstSearch) {
      return;
    }
    submit({ ...valueSerch, [evt.target.name]: evt.target.checked });
  };

  const handleChange = (evt) => {
    setValueSerch((valueSerch) => {
      return { ...valueSerch, [evt.target.name]: evt.target.value };
    });
  };

  return (
    <section>
      <Form
        name={'search'}
        onSubmit={handleSubmit}
        isFormActivated={isFormActivated}
        searchStatus={searchStatus}
        isFormValid={valueSerch.search.length !== 0}
      >
        <Input
          value={valueSerch.search}
          handleChange={handleChange}
          type={'search'}
          placeholder={'Фильм'}
          required
          name={'search'}
          form={'search'}
          isSavedMoviesPage={isSavedMoviesPage}
          disabled={!isFormActivated}
        />
        <Input
          handleChange={handleChangeCheckbox}
          type={'checkbox'}
          label={'Короткометражки'}
          name={'short'}
          form={'search'}
          isChecked={valueSerch.short}
          isSavedMoviesPage={isSavedMoviesPage}
          disabled={!isFormActivated}
        />
      </Form>
    </section>
  );
};

export default SearchForm;
