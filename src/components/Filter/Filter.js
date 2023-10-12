import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filters/slice';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        onChange={evt => dispatch(filterContact(evt.target.value))}
      ></Input>
    </Label>
  );
};
