import React, { useContext } from 'react';
import Store, { Question } from '../../context';
import { Form, Input, Select, Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import './QuestionForm.css';

interface QuestionFormProps {
  data: Question;
}

const QuestionForm = (props: QuestionFormProps) => {
  const { dispatch, state } = useContext(Store);
  const { id, topic, type, answerOptions } = props.data;
  const navigate = useNavigate();
  const onNext = (values: { [key: string]: string }) => {
    const { count, questions } = state;
    const [key] = Object.keys(values);
    dispatch({
      type: "NEXT_QUESTION",
      questionPayload: { id: key, value: values[key] }
    });
    if (count === questions.length - 1) {
      navigate('/results');
    }
  };
  const onPrev = () => {
    dispatch({
      type: 'PREV_QUESTION'
    });
  };
  const renderFormItem = () => {
    return type === 'TextInput' ? (
      <Form.Item
        label={topic}
        name={id}
        rules={[{ required: true, message: 'Field required' }]}
      >
        <Input size='large' data-testid='form-textInput'/>
      </Form.Item>
    ) : (
      <Form.Item
        name={id}
        label={topic}
        rules={[{ required: true, message: 'Field required' }]}
      >
        <Select placeholder={topic} allowClear size='large' data-testid='form-select'>
          {answerOptions?.map((option, idx) => (
            <Select.Option key={idx} value={option}>{option}</Select.Option>
          ))}
        </Select>
      </Form.Item>
    );
  };
  return (
    <Form layout='vertical' onFinish={onNext} className='form-layout' data-testid='question-form'>
      {renderFormItem()}
      <Form.Item>
        <Space>
          {state.count ? (
            <Button type='primary' htmlType='button' onClick={onPrev}>
              Previous
            </Button>
          ) : null}
          <Button type='primary' htmlType='submit' data-testid='submit-btn'>
            Next
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default QuestionForm;
