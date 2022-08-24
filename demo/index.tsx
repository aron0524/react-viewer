import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Viewer from '../src/Viewer';
// const img2 = require('./images/landscape2.jpg');
// const img = require('./images/landscape.jpg');
// const img3 = require('./images/tibet-6.jpg');
// const img4 = require('./images/image4.jpg');
import './index.less';
import classNames from 'classnames';
import { Button, List, Checkbox } from 'antd';
const ButtonGroup = Button.Group;

interface State {
  visible: boolean;
  activeIndex: number;
  rotate: number;
  mode: 'modal' | 'inline';
  drawerVisible: boolean;
  drag: boolean;
  attribute: boolean;
}

interface OptionData {
  key: string;
  type: 'boolean';
  value?: any;
}

const optionData: OptionData[] = [{
  key: 'drag',
  type: 'boolean',
}, {
  key: 'attribute',
  type: 'boolean',
}, {
  key: 'zoomable',
  type: 'boolean',
}, {
  key: 'rotatable',
  type: 'boolean',
}, {
  key: 'scalable',
  type: 'boolean',
}, {
  key: 'downloadable',
  type: 'boolean',
}, {
  key: 'loop',
  type: 'boolean',
}, {
  key: 'noClose',
  type: 'boolean',
  value: false,
}, {
  key: 'noImgDetails',
  type: 'boolean',
  value: false,
}, {
  key: 'noNavbar',
  type: 'boolean',
  value: false,
}, {
  key: 'noToolbar',
  type: 'boolean',
  value: false,
}, {
  key: 'noFooter',
  type: 'boolean',
  value: false,
}, {
  key: 'changeable',
  type: 'boolean',
}, {
  key: 'disableKeyboardSupport',
  type: 'boolean',
  value: false,
}, {
  key: 'noResetZoomAfterChange',
  type: 'boolean',
  value: false,
}, {
  key: 'noLimitInitializationSize',
  type: 'boolean',
  value: false,
}, {
  key: 'disableMouseZoom',
  type: 'boolean',
  value: false,
}, {
  key: 'downloadInNewWindow',
  type: 'boolean',
  value: false,
}, {
  key: 'showTotal',
  type: 'boolean',
}];

class App extends React.Component<any, Partial<State>> {
  container: HTMLDivElement;

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      activeIndex: 0,
      rotate: 0,
      mode: 'modal',
    };
    optionData.forEach(item => {
      if (item.value === undefined) {
        this.state[item.key] = true;
      } else {
        this.state[item.key] = item.value;
      }
    });
  }

  handleChangeModal = (e) => {
    this.setState({
      mode: 'modal',
    });
  }

  handleChangeInline = (e) => {
    this.setState({
      mode: 'inline',
      visible: true,
    });
  }

  handleOption = key => {
    this.setState({
      [key]: !this.state[key],
    });
  }

  render() {
    let images =  [
      {
        'id': 10624,
        'file_url': 'img/20220801/134147/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'file_type': 'img',
        'remark': '',
        'is_oss': 1,
        'rotate': 270,
        'creator': '户明伟',
        'modifier': '户明伟',
        'create_time': '2022-08-01 13:41:50',
        'update_time': '2022-08-01 13:41:50',
        'delete_time': 0,
        'value': 10624,
        'name': 'img/20220801/134147/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'origin': 'img/20220801/134147/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'thumb': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220801/134147/8c7dd922ad47494fc02c388e12c00eac.jpeg?x-oss-process=image/resize,h_150,w_150',
        'src': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220801/134147/8c7dd922ad47494fc02c388e12c00eac.jpeg?x-oss-process=image/rotate,270',
        'label': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220801/134147/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'img_hide_flag': 0,
      },
      {
        'id': 10625,
        'file_url': 'img/20220801/134156/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'file_type': 'img',
        'remark': '',
        'is_oss': 1,
        'rotate': 180,
        'creator': '户明伟',
        'modifier': '户明伟',
        'create_time': '2022-08-01 13:41:59',
        'update_time': '2022-08-01 13:41:59',
        'delete_time': 0,
        'value': 10625,
        'name': 'img/20220801/134156/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'origin': 'img/20220801/134156/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'thumb': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220801/134156/8c7dd922ad47494fc02c388e12c00eac.jpeg?x-oss-process=image/resize,h_150,w_150',
        'src': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220801/134156/8c7dd922ad47494fc02c388e12c00eac.jpeg?x-oss-process=image/rotate,180',
        'label': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220801/134156/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'img_hide_flag': 0,
      },
      {
        'id': 10626,
        'file_url': 'img/20220801/134208/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'file_type': 'img',
        'remark': '',
        'is_oss': 1,
        'rotate': 270,
        'creator': '户明伟',
        'modifier': '户明伟',
        'create_time': '2022-08-01 13:42:10',
        'update_time': '2022-08-01 13:42:10',
        'delete_time': 0,
        'value': 10626,
        'name': 'img/20220801/134208/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'origin': 'img/20220801/134208/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'thumb': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220801/134208/8c7dd922ad47494fc02c388e12c00eac.jpeg?x-oss-process=image/resize,h_150,w_150',
        'src': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220801/134208/8c7dd922ad47494fc02c388e12c00eac.jpeg?x-oss-process=image/rotate,270',
        'label': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220801/134208/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'img_hide_flag': 0,
      },
      {
        'id': 10627,
        'file_url': 'img/20220801/134216/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'file_type': 'img',
        'remark': '',
        'is_oss': 1,
        'rotate': 180,
        'creator': '户明伟',
        'modifier': '户明伟',
        'create_time': '2022-08-01 13:42:18',
        'update_time': '2022-08-01 13:42:18',
        'delete_time': 0,
        'value': 10627,
        'name': 'img/20220801/134216/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'origin': 'img/20220801/134216/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'thumb': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220801/134216/8c7dd922ad47494fc02c388e12c00eac.jpeg?x-oss-process=image/resize,h_150,w_150',
        'src': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220801/134216/8c7dd922ad47494fc02c388e12c00eac.jpeg?x-oss-process=image/rotate,180',
        'label': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220801/134216/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'img_hide_flag': 0,
      },
      {
        'id': 11168,
        'file_url': 'img/20220805/122946/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'file_type': 'img',
        'remark': '',
        'is_oss': 1,
        'rotate': 0,
        'creator': '户明伟',
        'modifier': '户明伟',
        'create_time': '2022-08-05 12:29:47',
        'update_time': '2022-08-05 12:29:47',
        'delete_time': 0,
        'value': 11168,
        'name': 'img/20220805/122946/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'origin': 'img/20220805/122946/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'thumb': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220805/122946/8c7dd922ad47494fc02c388e12c00eac.jpeg?x-oss-process=image/resize,h_150,w_150',
        'src': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220805/122946/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'label': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220805/122946/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'img_hide_flag': 0,
      },
      {
        'id': 11169,
        'file_url': 'img/20220805/122954/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'file_type': 'img',
        'remark': '',
        'is_oss': 1,
        'rotate': 0,
        'creator': '户明伟',
        'modifier': '户明伟',
        'create_time': '2022-08-05 12:29:54',
        'update_time': '2022-08-05 12:29:54',
        'delete_time': 0,
        'value': 11169,
        'name': 'img/20220805/122954/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'origin': 'img/20220805/122954/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'thumb': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220805/122954/8c7dd922ad47494fc02c388e12c00eac.jpeg?x-oss-process=image/resize,h_150,w_150',
        'src': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220805/122954/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'label': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220805/122954/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'img_hide_flag': 0,
      },
      {
        'id': 11170,
        'file_url': 'img/20220805/123000/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'file_type': 'img',
        'remark': '',
        'is_oss': 1,
        'rotate': 0,
        'creator': '户明伟',
        'modifier': '户明伟',
        'create_time': '2022-08-05 12:30:01',
        'update_time': '2022-08-05 12:30:01',
        'delete_time': 0,
        'value': 11170,
        'name': 'img/20220805/123000/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'origin': 'img/20220805/123000/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'thumb': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220805/123000/8c7dd922ad47494fc02c388e12c00eac.jpeg?x-oss-process=image/resize,h_150,w_150',
        'src': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220805/123000/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'label': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220805/123000/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'img_hide_flag': 0,
      },
      {
        'id': 11171,
        'file_url': 'img/20220805/123007/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'file_type': 'img',
        'remark': '',
        'is_oss': 1,
        'rotate': 0,
        'creator': '户明伟',
        'modifier': '户明伟',
        'create_time': '2022-08-05 12:30:08',
        'update_time': '2022-08-05 12:30:08',
        'delete_time': 0,
        'value': 11171,
        'name': 'img/20220805/123007/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'origin': 'img/20220805/123007/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'thumb': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220805/123007/8c7dd922ad47494fc02c388e12c00eac.jpeg?x-oss-process=image/resize,h_150,w_150',
        'src': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220805/123007/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'label': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220805/123007/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'img_hide_flag': 0,
      },
      {
        'id': 11172,
        'file_url': 'img/20220805/123026/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'file_type': 'img',
        'remark': '',
        'is_oss': 1,
        'rotate': 0,
        'creator': '户明伟',
        'modifier': '户明伟',
        'create_time': '2022-08-05 12:30:27',
        'update_time': '2022-08-05 12:30:27',
        'delete_time': 0,
        'value': 11172,
        'name': 'img/20220805/123026/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'origin': 'img/20220805/123026/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'thumb': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220805/123026/8c7dd922ad47494fc02c388e12c00eac.jpeg?x-oss-process=image/resize,h_150,w_150',
        'src': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220805/123026/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'label': 'http://pn-oa-3.oss-cn-hangzhou.aliyuncs.com:80/img/20220805/123026/8c7dd922ad47494fc02c388e12c00eac.jpeg',
        'img_hide_flag': 0,
      },
    ];

    let inline = this.state.mode === 'inline';

    let inlineContainerClass = classNames('inline-container', {
      show: this.state.visible && inline,
    });

    let imgListClass = classNames('img-list', {
      hide: this.state.visible && inline,
    });

    let options = {};
    optionData.forEach(item => {
      options[item.key] = this.state[item.key];
    });

    return (
      <div>
        <nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-brand">
              react-viewer
            </div>
            <a className="bagde" href="https://npmjs.org/package/react-viewer">
              <img src="https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&type=6&v=3.0.0&x2=0" />
            </a>
            <a className="bagde" href="https://travis-ci.org/infeng/react-viewer">
              <img src="https://travis-ci.org/infeng/react-viewer.svg?branch=master" />
            </a>
            <a className="bagde" href="https://codecov.io/gh/infeng/react-viewer">
              <img src="https://codecov.io/gh/infeng/react-viewer/branch/master/graph/badge.svg" />
            </a>
            <div className="github">
              <a className="bagde" href="https://github.com/infeng/react-viewer">
                <img
                src="https://img.shields.io/github/stars/infeng/react-viewer?style=social"
                />
              </a>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="wrap">
            <div>
              <h2>Options</h2>
              <div className="options">
                <ButtonGroup>
                  <Button
                    type={inline ? null : 'primary'}
                    onClick={this.handleChangeModal}
                  >
                      Modal mode
                  </Button>
                  <Button
                    type={inline ? 'primary' : null}
                    onClick={this.handleChangeInline}
                  >
                      Inline mode
                  </Button>
                </ButtonGroup>
                <List
                  className="options-list"
                  bordered
                  dataSource={optionData}
                  renderItem={item => {
                    let content = null;
                    switch (item.type) {
                      case 'boolean':
                        content = (
                          <Checkbox
                            checked={this.state[item.key]}
                            onChange={() => { this.handleOption(item.key); }}
                          >
                            {item.key}
                          </Checkbox>
                        );
                        break;
                      default:
                        break;
                    }
                    return (
                      <List.Item>
                        {content}
                      </List.Item>
                    );
                  }}
                />
              </div>
            </div>
            <div className="img-list-wrap">
              <div className={imgListClass}>
                {images.map((item, index) => {
                  return (
                    <div key={index.toString()} className="img-item">
                      <img src={item.src} onClick={() => {
                        this.setState({
                          visible: true,
                          activeIndex: index,
                        });
                      }}/>
                    </div>
                  );
                })}
              </div>
              <div className={inlineContainerClass} ref={ref => {this.container = ref; }}></div>
            </div>
          </div>
          <Viewer
          visible={this.state.visible}
          scalable={true}
          onClose={() => {
            this.setState({ visible: false });
          }}
          onMaskClick={() => {
            this.setState({ visible: false });
          }}
          images={images}
          rotate={images[this.state.activeIndex].rotate}
          activeIndex={this.state.activeIndex}
          container={inline ? this.container : null}
          downloadable
          customToolbar={(toolbars) => {
            return toolbars.concat([{
              key: 'test',
              render: <div>C</div>,
              onClick: (activeImage) => {
                console.log(activeImage);
              },
            }]);
          }}
          {...options}
          />
        </div>
        <div className="footer">
          <div className="container-footer">
            <a href="https://github.com/infeng" className="signature">@infeng</a>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
