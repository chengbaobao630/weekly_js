import React, {Component} from "react";
import {Breadcrumb, Button, Collapse, Form, Input, Layout, Menu, Slider, Table, DatePicker} from 'antd';
import request from "../service"

const FormItem = Form.Item;
const Panel = Collapse.Panel;
const {Column} = Table;

let tableData = [{"content": "cc", "key": "0"}, {"content": "cc", "key": "1"}, {"content": "cc", "key": "2"}]

const {Header, Content, Footer} = Layout;

class RegistrationForm extends React.Component {


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log('Received values of form: ',JSON.stringify(values));
            } else {
                console.log('Received values of form: ',JSON.stringify(values));
                let promise = request("http://localhost:8000/weekly/send", JSON.stringify(values));
                promise.then((data) => {
                    console.log(data)
                })
            }
        });
    }


    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <Form onSubmit={this.handleSubmit} style={{maxWidth: '70%'}}>
                <Collapse defaultActiveKey={['1']}>
                    <Panel header="本周工作内容" key="1">
                        <Table key={1} dataSource={tableData} pagination={false}>
                            <Column
                                title="Job"
                                key="job"
                                render={(action) => (
                                    <FormItem
                                        {...formItemLayout}
                                        label=""
                                    >
                                        {getFieldDecorator('this_week.job[' + action.key + '].job', {
                                            rules: [{
                                                required:action.key <1, message: 'Please input your E-mail!',
                                            }],
                                        })(
                                            <Input/>
                                        )}
                                    </FormItem>
                                )}
                            />
                            <Column
                                title="Content"
                                key="content"
                                render={(action) => (
                                    <FormItem
                                        {...formItemLayout}
                                        label=""
                                    >
                                        {getFieldDecorator('this_week.job[' + action.key + '].content', {
                                            rules: [{
                                                required:action.key <1, message: 'Please input your E-mail!',
                                            }],
                                        })(
                                            <Input/>
                                        )}
                                    </FormItem>
                                )}
                            />
                            <Column
                                title="Percent"
                                key="percent"
                                render={
                                    (action) => (
                                        <FormItem
                                            {...formItemLayout}
                                            label=""
                                        >
                                            {getFieldDecorator('this_week.job[' + action.key + '].percent', {
                                                rules: [{
                                                    required:action.key <1, message: 'Please input your E-mail!',
                                                }],
                                            })(
                                                <Slider min={1} max={100}/>
                                            )}
                                        </FormItem>
                                    )}
                            />
                            <Column
                                title="Result"
                                key="result"
                                render={(action) => (
                                    <FormItem
                                        {...formItemLayout}
                                        label=""
                                    >
                                        {getFieldDecorator('this_week.job[' + action.key + '].result', {
                                            rules: [{
                                                required:action.key <1, message: 'Please input your E-mail!',
                                            }],
                                        })(
                                            <Input/>
                                        )}
                                    </FormItem>
                                )}
                            />
                        </Table>
                        <Table key={2} dataSource={[{"key": 0}]} pagination={false}>
                            <Column
                                title="Trace"
                                key="trace"
                                render={(action) => (
                                    <FormItem
                                        {...formItemLayout}
                                        label=""
                                    >
                                        {getFieldDecorator('this_week.trace', {
                                            rules: [{
                                                required:action.key <1, message: 'Please input your E-mail!',
                                            }],
                                        })(
                                            <Input/>
                                        )}
                                    </FormItem>
                                )}
                            />
                            <Column
                                title="QA"
                                key="qa"
                                render={(action) => (
                                    <FormItem
                                        {...formItemLayout}
                                        label=""
                                    >
                                        {getFieldDecorator('this_week.qa', {
                                            rules: [{
                                                required:action.key <1, message: 'Please input your E-mail!',
                                            }],
                                        })(
                                            <Input/>
                                        )}
                                    </FormItem>
                                )}
                            />
                        </Table>
                    </Panel>
                    <Panel header="下周工作内容" key="2">
                        <Table key={1} dataSource={tableData} pagination={false}>
                            <Column
                                title="Job"
                                key="job"
                                render={(action) => (
                                    <FormItem
                                        {...formItemLayout}
                                        label=""
                                    >
                                        {getFieldDecorator('next_week.job[' + action.key + '].job', {
                                            rules: [{
                                                required:action.key <1, message: 'Please input your E-mail!',
                                            }]
                                        })(
                                            <Input/>
                                        )}
                                    </FormItem>
                                )}
                            />
                            <Column
                                title="Content"
                                key="content"
                                render={(action) => (
                                    <FormItem
                                        {...formItemLayout}
                                        label=""
                                    >
                                        {getFieldDecorator('next_week.job[' + action.key + '].content', {
                                            rules: [{
                                                required:action.key <1, message: 'Please input your E-mail!',
                                            }]
                                        })(
                                            <Input/>
                                        )}
                                    </FormItem>
                                )}
                            />

                            <Column
                                title="Time"
                                key="time"
                                render={(action) => (
                                    <FormItem
                                        {...formItemLayout}
                                        label=""
                                    >
                                        {getFieldDecorator('next_week.job[' + action.key + '].time', {
                                            rules: [{
                                                required:action.key <1, message: 'Please input your E-mail!',
                                            }]
                                        })(
                                            <DatePicker style={{width: '100%'}} format={"YYYY-MM-DD"}/>
                                        )}
                                    </FormItem>
                                )}
                            />
                        </Table>
                        <Table key={2} dataSource={[{"key": 0}]} pagination={false}>
                            <Column
                                title="Expect_result"
                                key="expect_result"
                                render={(action) => (
                                    <FormItem
                                        {...formItemLayout}
                                        label=""
                                    >
                                        {getFieldDecorator('next_week.expect_result', {
                                            rules: [{
                                                required:action.key <1, message: 'Please input your E-mail!',
                                            }],
                                        })(
                                            <Input/>
                                        )}
                                    </FormItem>
                                )}
                            />
                            <Column
                                title="Support"
                                key="support"
                                render={(action) => (
                                    <FormItem
                                        {...formItemLayout}
                                        label=""
                                    >
                                        {getFieldDecorator('next_week.support', {
                                            rules: [{
                                                required:action.key <1, message: 'Please input your E-mail!',
                                            }],
                                        })(
                                            <Input/>
                                        )}
                                    </FormItem>
                                )}
                            />
                        </Table>
                    </Panel>
                    <Panel header="后期工作内容" key="3">
                        <Table key={1} dataSource={tableData} pagination={false}>
                            <Column
                                title="Job"
                                key="job"
                                render={(action) => (
                                    <FormItem
                                        {...formItemLayout}
                                        label=""
                                    >
                                        {getFieldDecorator('after.job[' + action.key + '].job', {
                                            rules: [{
                                                required:action.key <1, message: 'Please input your E-mail!',
                                            }],
                                        })(
                                            <Input/>
                                        )}
                                    </FormItem>
                                )}
                            />
                        <Column
                                title="Content"
                                key="content"
                                render={(action) => (
                                    <FormItem
                                        {...formItemLayout}
                                        label=""
                                    >
                                        {getFieldDecorator('after.job[' + action.key + '].content', {
                                            rules: [{
                                                required: action.key <1, message: 'Please input your E-mail!',
                                            }],
                                        })(
                                            <Input/>
                                        )}
                                    </FormItem>
                                )}
                            />

                            <Column
                                title="Time"
                                key="time"
                                render={(action) => (
                                    <FormItem
                                        {...formItemLayout}
                                        label=""
                                    >
                                        {getFieldDecorator('after.job[' + action.key + '].time', {
                                            rules: [{
                                                required:action.key <1, message: 'Please input your E-mail!',
                                            }],
                                        })(
                                            <DatePicker style={{width: '100%'}}/>
                                        )}
                                    </FormItem>
                                )}
                            />
                        </Table>
                    </Panel>
                </Collapse>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Register</Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

class Weekly extends Component {
    render() {
        return <Layout className="layout">
            <Header>
                <div className="logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{lineHeight: '64px'}}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Content style={{padding: '0 50px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{
                    background: '#fff', padding: 24, minHeight: 280, marginLeft: 0,
                    marginRight: 0
                }}>
                    <WrappedRegistrationForm/>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>
            </Footer>
        </Layout>
    }
}


export default Weekly
