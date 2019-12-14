webpackJsonp([0],{

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(26);

var _reactRouter = __webpack_require__(19);

var _SearchBar = __webpack_require__(31);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FriendList = function FriendList(props) {
  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      null,
      _react2.default.createElement(
        _reactRouter.Link,
        { to: '/profile' },
        props.friend.name
      )
    ),
    _react2.default.createElement(
      'td',
      null,
      props.friend.school
    ),
    _react2.default.createElement(
      'td',
      null,
      props.friend.year
    ),
    _react2.default.createElement(
      'td',
      null,
      props.friend.rate
    ),
    _react2.default.createElement(
      'td',
      null,
      props.friend.bio
    )
  );
};

function FriendTable(props) {
  var issueRows = props.friends.map(function (friend) {
    return _react2.default.createElement(FriendList, { key: friend._id, friend: friend });
  });

  return _react2.default.createElement(
    'table',
    { id: 'bordered-table' },
    _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          null,
          'Name:'
        ),
        _react2.default.createElement(
          'th',
          null,
          'School:'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Year:'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Rate:'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Bio:'
        )
      )
    ),
    _react2.default.createElement(
      'tbody',
      null,
      issueRows
    )
  );
}

var Connect = function (_React$Component) {
  _inherits(Connect, _React$Component);

  function Connect() {
    _classCallCheck(this, Connect);

    var _this = _possibleConstructorReturn(this, (Connect.__proto__ || Object.getPrototypeOf(Connect)).call(this));

    _this.loadData = _this.loadData.bind(_this);

    _this.state = {
      friends: []
    };
    return _this;
  }

  _createClass(Connect, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this2 = this;

      var friend = this.state.friends;
      fetch("api/friends").then(function (res) {
        if (res.ok) {
          res.json().then(function (json) {
            var friends = [];
            json.records.forEach(function (friend) {
              friends.push(friend);
            });
            _this2.setState({ friends: friends });
          });
        }
      }).catch(function (err) {
        alert("There was a problem: " + err.message);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SearchBar2.default, null),
        _react2.default.createElement(
          'center',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Connect with Students'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(FriendTable, { friends: this.state.friends })
        )
      );
    }
  }]);

  return Connect;
}(_react2.default.Component);

exports.default = Connect;

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bodyPage = {
  width: '100%',
  height: '700px',
  margin: '0'

};

var content = {
  width: '550px',
  margin: 'auto',
  marginBottom: '5%'
};

var divStyle = {
  width: '100%',
  height: '250px',
  marginTop: '20px'

};

var signUp = {
  height: '$height',
  marginLeft: '25px',
  marginTop: '20px'
};

var loginPage = {
  height: '$height/2',
  marginLeft: '25%',
  marginTop: '20px'
};

var titleName = {
  border: "2px solid black",
  marginTop: "10px",
  borderRadius: "50%",
  textAlign: "center",
  fontFamily: "cursive",
  fontSize: "50px",
  height: "350px",
  width: "350px",
  lineHeight: "350px"
};

var Welcome = function (_React$createClass) {
  _inherits(Welcome, _React$createClass);

  function Welcome() {
    _classCallCheck(this, Welcome);

    return _possibleConstructorReturn(this, (Welcome.__proto__ || Object.getPrototypeOf(Welcome)).apply(this, arguments));
  }

  return Welcome;
}(_react2.default.createClass({
  displayName: 'Welcome',

  getInitialState: function getInitialState() {
    return { signup: false, login: true };
  },
  switch: function _switch(word) {
    var signup = void 0,
        login = void 0;
    if (word == "signup") {
      signup = true;login = false;
    } else {
      login = true;signup = false;
    }
    return this.setState({ login: login, signup: signup });
  },

  render: function render() {
    return _react2.default.createElement(
      'div',
      { style: bodyPage },
      _react2.default.createElement(
        'center',
        { style: content },
        _react2.default.createElement(
          'div',
          { className: 'picture', style: titleName },
          'Website title'
        ),
        _react2.default.createElement('br', null),
        ' ',
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { id: 'buttons' },
          _react2.default.createElement(
            'button',
            { id: 'signupButton', onClick: this.switch.bind(null, "signup"), className: 'btn btn-dark', style: signUp },
            'Sign Up'
          ),
          _react2.default.createElement(
            'button',
            { id: 'loginButton', onClick: this.switch.bind(null, "login"), className: 'btn btn-dark', style: loginPage },
            'Login'
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        this.state.signup ? _react2.default.createElement(Signup, null) : null,
        this.state.login ? _react2.default.createElement(Login, null) : null
      )
    );
  }
}));

exports.default = Welcome;

var Signup = function (_React$Component) {
  _inherits(Signup, _React$Component);

  function Signup() {
    _classCallCheck(this, Signup);

    var _this2 = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this));

    _this2.handleEvent = _this2.handleEvent.bind(_this2);
    return _this2;
  }

  _createClass(Signup, [{
    key: 'handleEvent',
    value: function handleEvent(e) {
      e.preventDefault();
      var form = document.forms.user;
      var submitReq = {
        "firstname": form.firstname.value,
        "lastname": form.lastname.value,
        "degree": form.inputDegree.value,
        "school": form.inputSchool.value,
        "email": form.inputEmail.value,
        "major": form.inputMajor.value,
        "year": form.inputYear.value,
        "country": form.inputCountry.value,
        "username": form.inputUsername.value,
        "password": form.inputPassword.value,
        "comfirmPassword": form.comfirmPassword.value
      };

      fetch('api/users', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitReq)
      }).then(function (res) {
        return res.json();
      }).then(function (json) {
        if (json.sucess) {
          alert('Failed to create new user.\n Error description ' + json.msg);
        } else {
          alert('User Saved');
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'center',
        null,
        _react2.default.createElement(
          'form',
          { className: 'form-group', name: 'user', onSubmit: this.handleEvent },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { 'for': 'name' },
              'Name'
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('input', { type: 'name', className: 'form-control', id: 'firstname', placeholder: ' First Name' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('input', { type: 'name', className: 'form-control', id: 'lastname', placeholder: ' Last Name' })
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { 'for': 'degree' },
              'Undergraduate or Graduate Student'
            ),
            _react2.default.createElement('input', { type: 'school', className: 'form-control', id: 'inputDegree', placeholder: 'School' })
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { 'for': 'school' },
              'School'
            ),
            _react2.default.createElement('input', { type: 'school', className: 'form-control', id: 'inputSchool', placeholder: 'School' })
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { 'for': 'inputEmail' },
              'School Email'
            ),
            _react2.default.createElement('input', { type: 'email', className: 'form-control', id: 'inputEmail', placeholder: 'Email' })
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { 'for': 'major' },
              'Major'
            ),
            _react2.default.createElement('input', { type: 'major', className: 'form-control', id: 'inputMajor', placeholder: 'Major' })
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { 'for': 'year' },
              'Year'
            ),
            _react2.default.createElement('input', { type: 'year', className: 'form-control', id: 'inputYear', placeholder: 'Year' })
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { 'for': 'country' },
              'Country'
            ),
            _react2.default.createElement('input', { type: 'country', className: 'form-control', id: 'inputCountry', placeholder: 'Country' })
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { 'for': 'userName' },
              'Username'
            ),
            _react2.default.createElement('input', { type: 'email', className: 'form-control', id: 'inputUsername', placeholder: ' Username' })
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { 'for': 'inputPassword' },
              'Password'
            ),
            _react2.default.createElement('input', { type: 'password', className: 'form-control', id: 'inputPassword', placeholder: ' Password' })
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { 'for': 'inputPassword' },
              'Confirm Password'
            ),
            _react2.default.createElement('input', { type: 'password', className: 'form-control', id: 'comfirmPassword', placeholder: ' Password' })
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'a',
            { className: 'btn btn-dark', role: 'button' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/form', style: { textDecoration: 'none', color: 'white' } },
              'Sign Up'
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null)
      );
    }
  }]);

  return Signup;
}(_react2.default.Component);

var Login = function (_React$Component2) {
  _inherits(Login, _React$Component2);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'center',
        null,
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { 'for': 'inputEmail' },
              'Username'
            ),
            _react2.default.createElement('input', { type: 'email', className: 'form-control', id: 'inputEmail', placeholder: ' Username' })
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { 'for': 'inputPassword' },
              'Password'
            ),
            _react2.default.createElement('input', { type: 'password', className: 'form-control', id: 'inputPassword', placeholder: ' Password' })
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'a',
            { className: 'btn btn-dark', role: 'button' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/about', style: { textDecoration: 'none', color: 'white' } },
              'Login'
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null)
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(26);

var _reactRouter = __webpack_require__(19);

var _SearchBar = __webpack_require__(31);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Style Variables
var inputStyle = {
  marginRight: '5%'

};

var textStyle = {
  fontSize: '22px',
  fontFamily: 'Athelas',
  marginLeft: '5%',
  marginRight: '5%'

};

var formStyle = {
  marginLeft: '2%',
  marginRight: '2%',
  fontSize: '20px'
  //Form Helpers

};
var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.state = {
      one: '',
      two: '',
      three: '',
      four: '',
      five: '',
      six: '',
      seven: '',
      eight: '',
      nine: '',
      ten: ''
    };

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.oneChange = _this.oneChange.bind(_this);
    _this.twoChange = _this.twoChange.bind(_this);
    _this.threeChange = _this.threeChange.bind(_this);
    _this.fourChange = _this.fourChange.bind(_this);
    _this.fiveChange = _this.fiveChange.bind(_this);
    _this.sixChange = _this.sixChange.bind(_this);
    _this.sevenChange = _this.sevenChange.bind(_this);
    _this.eightChange = _this.eightChange.bind(_this);
    _this.nineChange = _this.nineChange.bind(_this);
    _this.tenChange = _this.tenChange.bind(_this);
    return _this;
  }

  _createClass(Form, [{
    key: 'oneChange',
    value: function oneChange(e) {
      this.setState({ one: e.target.value });
    }
  }, {
    key: 'twoChange',
    value: function twoChange(e) {
      this.setState({ two: e.target.value });
    }
  }, {
    key: 'threeChange',
    value: function threeChange(e) {
      this.setState({ three: e.target.value });
    }
  }, {
    key: 'fourChange',
    value: function fourChange(e) {
      this.setState({ four: e.target.value });
    }
  }, {
    key: 'fiveChange',
    value: function fiveChange(e) {
      this.setState({ five: e.target.value });
    }
  }, {
    key: 'sixChange',
    value: function sixChange(e) {
      this.setState({ six: e.target.value });
    }
  }, {
    key: 'sevenChange',
    value: function sevenChange(e) {
      this.setState({ seven: e.target.value });
    }
  }, {
    key: 'eightChange',
    value: function eightChange(e) {
      this.setState({ eight: e.target.value });
    }
  }, {
    key: 'nineChange',
    value: function nineChange(e) {
      this.setState({ nine: e.target.value });
    }
  }, {
    key: 'tenChange',
    value: function tenChange(e) {
      this.setState({ ten: e.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.question;
      var submitReq = {
        "one": form.inlineRadioOptions1.value,
        "two": form.inlineRadioOptions2.value,
        "three": form.inlineRadioOptions3.value,
        "four": form.inlineRadioOptions4.value,
        "five": form.inlineRadioOptions5.value,
        "six": form.inlineRadioOptions6.value,
        "seven": form.inlineRadioOptions7.value,
        "eight": form.inlineRadioOptions8.value,
        "nine": form.inlineRadioOptions9.value,
        "ten": form.inlineRadioOptions10.value
      };

      fetch('/api/questionform', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitReq)
      }).then(function (res) {
        return res.json();
      }).then(function (json) {
        if (json.success) {
          alert('Failed to add event.\n Error description: ' + json.msg);
        } else {
          alert('Questions Saved');
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SearchBar2.default, null),
        _react2.default.createElement(
          'center',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Survery Questions'
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'form',
          { className: 'form-group', name: 'question', onSubmit: this.handleSubmit },
          _react2.default.createElement(
            'h3',
            { style: { marginLeft: '2%' } },
            'What are the people you want to connect with?'
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'one' },
                  'Do you want to meet in person or online?'
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'inlineRadioOptions1', id: 'inlineRadio1', value: 'option1', checked: this.state.one === 'option1', onChange: this.oneChange }),
                _react2.default.createElement(
                  'label',
                  { 'class': 'form-check-label', 'for': 'inlineRadio1' },
                  'In person '
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'inlineRadioOptions1', id: 'inlineRadio1', value: 'option2', checked: this.state.one === 'option2', onChange: this.oneChange }),
                _react2.default.createElement(
                  'label',
                  { 'class': 'form-check-label', 'for': 'inlineRadio1' },
                  'Online'
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'inlineRadioOptions1', id: 'inlineRadio1', value: 'option3', checked: this.state.one === 'option3', onChange: this.oneChange }),
                _react2.default.createElement(
                  'label',
                  { 'class': 'form-check-label', 'for': 'inlineRadio1' },
                  'Both'
                )
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'two' },
                  'Do you want to connect with Undergraduates or Graduates Students?'
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'inlineRadioOptions2', id: 'inlineRadio2', value: 'option4', checked: this.state.two === 'option4', onChange: this.twoChange }),
                _react2.default.createElement(
                  'label',
                  { 'class': 'form-check-label', 'for': 'inlineRadio1' },
                  'Undergraduates'
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'inlineRadioOptions2', id: 'inlineRadio2', value: 'option5', checked: this.state.two === 'option5', onChange: this.twoChange }),
                _react2.default.createElement(
                  'label',
                  { 'class': 'form-check-label', 'for': 'inlineRadio2' },
                  'Graduates'
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'inlineRadioOptions2', id: 'inlineRadio2', value: 'option6', checked: this.state.two === 'option6', onChange: this.twoChange }),
                _react2.default.createElement(
                  'label',
                  { 'class': 'form-check-label', 'for': 'inlineRadio2' },
                  'Both'
                )
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'three' },
                  'Do you want to connect with people in the same year as you?'
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'inlineRadioOptions3', id: 'inlineRadio3', value: 'option7', checked: this.state.three === 'option7', onChange: this.threeChange }),
                _react2.default.createElement(
                  'label',
                  { 'class': 'form-check-label', 'for': 'inlineRadio3' },
                  'Yes '
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'inlineRadioOptions3', id: 'inlineRadio3', value: 'option8', checked: this.state.three === 'option8', onChange: this.threeChange }),
                _react2.default.createElement(
                  'label',
                  { 'class': 'form-check-label', 'for': 'inlineRadio3' },
                  'No'
                )
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'four' },
                  'Do you want to connect with people from the same country?'
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'inlineRadioOptions4', id: 'inlineRadio4', value: 'option9', checked: this.state.four === 'option9', onChange: this.fourChange }),
                _react2.default.createElement(
                  'label',
                  { 'class': 'form-check-label', 'for': 'inlineRadio1' },
                  'Yes '
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'inlineRadioOptions4', id: 'inlineRadio4', value: 'option10', checked: this.state.four === 'option10', onChange: this.fourChange }),
                _react2.default.createElement(
                  'label',
                  { 'class': 'form-check-label', 'for': 'inlineRadio4' },
                  'No'
                )
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'five' },
                  'Do you want to connect with people who share the same ethnicity?'
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'inlineRadioOptions5', id: 'inlineRadio5', value: 'option11', checked: this.state.five === 'option11', onChange: this.fiveChange }),
                _react2.default.createElement(
                  'label',
                  { 'class': 'form-check-label', 'for': 'inlineRadio5' },
                  'Yes '
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'inlineRadioOptions5', id: 'inlineRadio5', value: 'option12', checked: this.state.five === 'option12', onChange: this.fiveChange }),
                _react2.default.createElement(
                  'label',
                  { 'class': 'form-check-label', 'for': 'inlineRadio5' },
                  'No'
                )
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'six' },
                  'Do you want to connect with people in the same major?'
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'inlineRadioOptions6', id: 'inlineRadio6', value: 'option13', checked: this.state.six === 'option13', onChange: this.sixChange }),
                _react2.default.createElement(
                  'label',
                  { 'class': 'form-check-label', 'for': 'inlineRadio6' },
                  'Yes '
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'inlineRadioOptions6', id: 'inlineRadio6', value: 'option14', checked: this.state.six === 'option14', onChange: this.sixChange }),
                _react2.default.createElement(
                  'label',
                  { 'class': 'form-check-label', 'for': 'inlineRadio6' },
                  'No'
                )
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'h3',
            { style: { marginLeft: '2%' } },
            'Knowledge about the school abd why are you using this website'
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'seven' },
                  'Are you looking for someone to help you?'
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'inlineRadioOptions7', id: 'inlineRadio7', value: 'option15', checked: this.state.seven === 'option15', onChange: this.sevenChange }),
                _react2.default.createElement(
                  'label',
                  { 'class': 'form-check-label', 'for': 'inlineRadio7' },
                  'Yes '
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'inlineRadioOptions7', id: 'inlineRadio7', value: 'option16', checked: this.state.seven === 'option16', onChange: this.sevenChange }),
                _react2.default.createElement(
                  'label',
                  { 'class': 'form-check-label', 'for': 'inlineRadio7' },
                  'No'
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'inlineRadioOptions7', id: 'inlineRadio7', value: 'option17', checked: this.state.seven === 'option12', onChange: this.sevenChange }),
                _react2.default.createElement(
                  'label',
                  { 'class': 'form-check-label', 'for': 'inlineRadio2' },
                  'Both'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'eight' },
                  'Do you have any knowledge of the school before you started?'
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'inlineRadioOptions8', id: 'inlineRadio8', value: 'option18', checked: this.state.eight === 'option18', onChange: this.eightChange }),
                _react2.default.createElement(
                  'label',
                  { 'class': 'form-check-label', 'for': 'inlineRadio8' },
                  'Yes '
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'inlineRadioOptions8', id: 'inlineRadio8', value: 'option19', checked: this.state.eight === 'option19', onChange: this.eightChange }),
                _react2.default.createElement(
                  'label',
                  { 'class': 'form-check-label', 'for': 'inlineRadio8' },
                  'No'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'nine' },
                  'Do you know the aera of where your school is located?'
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'inlineRadioOptions9', id: 'inlineRadio9', value: 'option20', checked: this.state.nine === 'option20', onChange: this.nineChange }),
                _react2.default.createElement(
                  'label',
                  { 'class': 'form-check-label', 'for': 'inlineRadio9' },
                  'Yes '
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'inlineRadioOptions9', id: 'inlineRadio9', value: 'option21', checked: this.state.nine === 'option21', onChange: this.nineChange }),
                _react2.default.createElement(
                  'label',
                  { 'class': 'form-check-label', 'for': 'inlineRadio9' },
                  'No'
                )
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'ten' },
                  'Do you have a car on campus?'
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'inlineRadioOptions10', id: 'inlineRadio10', value: 'option22', checked: this.state.ten === 'option22', onChange: this.tenChange }),
                _react2.default.createElement(
                  'label',
                  { 'class': 'form-check-label', 'for': 'inlineRadio10' },
                  'Yes '
                )
              ),
              _react2.default.createElement(
                'div',
                { 'class': 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { 'class': 'form-check-input', type: 'radio', name: 'inlineRadioOptions10', id: 'inlineRadio10', value: 'option23', checked: this.state.ten === 'option23', onChange: this.tenChange }),
                _react2.default.createElement(
                  'label',
                  { 'class': 'form-check-label', 'for': 'inlineRadio10' },
                  'No'
                )
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'two' },
                  'Are there any challenges you are coping with? If yes, please describe.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('textarea', { type: 'text', className: 'form-control', id: 'two', style: inputStyle })
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'two' },
                  'How can someone help you with your challenges? Please descibe.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('textarea', { type: 'text', className: 'form-control', id: 'two', style: inputStyle })
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'two' },
                  'How are you able to help someone with their challenges? Please descibe how you can help a person.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('textarea', { type: 'text', className: 'form-control', id: 'two', style: inputStyle })
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'h3',
            { style: { marginLeft: '2%' } },
            'What are your hobbies'
          )
        ),
        _react2.default.createElement(
          'center',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement(
                'button',
                { className: 'btn btn-dark', type: 'submit' },
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/save', style: { textDecoration: 'none', color: 'white' } },
                  'Save'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement(
                'a',
                { className: 'btn btn-dark', role: 'button' },
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/question', style: { textDecoration: 'none', color: 'white' } },
                  'Edit'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement(
                'a',
                { className: 'btn btn-dark', role: 'button' },
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/connect', style: { textDecoration: 'none', color: 'white' } },
                  'Find Friends'
                )
              )
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null)
      );
    }
  }]);

  return Form;
}(_react2.default.Component);

/*
class Save extends React.Component {
  constructor() {
    super();
    this.loadData = this.loadData.bind(this);

    this.state = {
     questionform: [],
    };
    
  }
  componentDidMount(){
      this.loadData();
  }

  loadData(){
      let question = this.state.questionform;
      fetch("api/questionform")
        .then(res => {
            if (res.ok){
                res.json().then( json => {
                    let questionform = [];
                    json.records.forEach(question => {
                        questionform.push(
                            question
                        )
                    });
                    this.setState({questionform: questionform})
                })
            }
        }).catch( err => {
            alert("There was a problem: " + err.message)
        });
  }
  
  render() {
    return (
      <div id="save">
        <SearchBar>
        </SearchBar>
        <center>
        <h1>Save</h1>
        <br></br>
        <hr />
          <FormPage questionform={this.state.questionform} />
          <hr />
          <div className = "row">
              <div className="col">
              <a className="btn btn-dark"role="button"><Link to="/question" style={{ textDecoration: 'none', color: 'white' }} >Edit</Link></a>
              </div> 
              <div className="col">
              <a className="btn btn-dark"role="button"><Link to="/connect" style={{ textDecoration: 'none', color: 'white' }} >Find Friends</Link></a>
              </div>
          </div>   
          <br></br><br></br>
        </center>
      </div>
    );
  }
}
*/


exports.default = Form;

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(26);

var _reactRouter = __webpack_require__(19);

var _Profile = __webpack_require__(79);

var _Profile2 = _interopRequireDefault(_Profile);

var _SearchBar = __webpack_require__(31);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_React$Component) {
  _inherits(About, _React$Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this));
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SearchBar2.default, null),
        _react2.default.createElement(
          'center',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'About'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'p',
            null,
            'This is an interactive platform where international students and domestic students can find friends.'
          )
        )
      );
    }
  }]);

  return About;
}(_react2.default.Component);

exports.default = About;

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(86);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(19);

var _Connect = __webpack_require__(122);

var _Connect2 = _interopRequireDefault(_Connect);

var _Form = __webpack_require__(124);

var _Form2 = _interopRequireDefault(_Form);

var _Welcome = __webpack_require__(123);

var _Welcome2 = _interopRequireDefault(_Welcome);

var _SearchBar = __webpack_require__(31);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _Profile = __webpack_require__(79);

var _Profile2 = _interopRequireDefault(_Profile);

var _About = __webpack_require__(125);

var _About2 = _interopRequireDefault(_About);

var _Save = __webpack_require__(243);

var _Save2 = _interopRequireDefault(_Save);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contentNode = document.getElementById("contents");

// A simple component to indicate that a page was not found.
var NoMatch = function NoMatch() {
  return _react2.default.createElement(
    'p',
    null,
    'Page Not Found'
  );
};

// This defines the main application layout that can be used
// across nested routes. The `props.children` property is received
// by the parent route. See the route definitions below.
var App = function App(props) {
  return _react2.default.createElement(
    'div',
    { className: 'contents' },
    props.children
  );
};

// For safety, we specify that the prop types received by the
// App component must require a "children" property. If we do
// not include this it will not compile.
App.propTypes = {
  children: _react2.default.PropTypes.object.isRequired
};

// The "routed app" that defines the different routes that
// are supposed in this application. As you can see, If the
// URL path is '/' we will render the IssueList component,
// if the path is '/issues/:id' we render the IssueEdit component,
// and if we get anything else we render the NoMatch view.
// This router uses the "hash history" approach to implement
// single-page apps with multiple views.
var RoutedApp = function RoutedApp() {
  return _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/', component: App },
      _react2.default.createElement(_reactRouter.IndexRoute, { component: _Welcome2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/home', component: (0, _reactRouter.withRouter)(_SearchBar2.default) }),
      _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/connect', component: _Connect2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/form', component: _Form2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/save', component: _Save2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/profile', component: _Profile2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '*', component: NoMatch })
    )
  );
};

// This renders the JSX router inside the content node:
_reactDom2.default.render(_react2.default.createElement(RoutedApp, null), contentNode);

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(26);

var _reactRouter = __webpack_require__(19);

var _SearchBar = __webpack_require__(31);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*const FormQuestions = (props) => (
   <div>
      <div class="form-group" >
          <label for="exampleFormControlTextarea1" style={textStyle}>What do you like to do?{props.question.one}</label>
            <br></br>
            <textarea class="form-control form-control-lg" id="one" rows="3" style={inputStyle}></textarea>
          </div>
          <br></br>
          <div class="form-group" >
          <label for="exampleFormControlTextarea1" style={textStyle}>What struggles are you facing?{props.question.two}</label>
              <br></br>
              <textarea class="form-control form-control-lg" id="two" rows="3" style={inputStyle}></textarea>
            </div>
            <br></br>
            <div class="form-group" >
          <label for="exampleFormControlTextarea1" style={textStyle}>What are you looking for in a person?{props.question.three}</label>
              <br></br>
              <textarea class="form-control form-control-lg" id="three" rows="3" style={inputStyle}></textarea>
            </div>
            <br></br>
            <div class="form-group" >
              <label for="exampleFormControlTextarea1" style={textStyle}>How can someone help you?{props.question.four}</label>
              <br></br>
              <textarea class="form-control form-control-lg" id="four" rows="3" style={inputStyle}></textarea>
            </div>
            <br></br>
            <div class="form-group" >
              <label for="exampleFormControlTextarea1" style={textStyle}>Why do you want to connect with someone?{props.question.five}</label>
              <br></br>
              <textarea class="form-control form-control-lg" id="five" rows="3" style={inputStyle}></textarea>
            </div>
            <br></br>
            <div class="form-group" >
              <label for="exampleFormControlTextarea1" style={textStyle}>Do you want to meet in person or online?{props.question.six}</label>
              <br></br>
              <textarea class="form-control form-control-lg" id="six" rows="3" style={inputStyle}></textarea>
            </div>
            <br></br>
            <div class="form-group" >
              <label for="exampleFormControlTextarea1" style={textStyle}>Do you want to connect with people from the same country?{props.question.seven}</label>
              <br></br>
              <textarea class="form-control form-control-lg" id="seven" rows="3" style={inputStyle}></textarea>
            </div>
            <br></br>
            <div class="form-group" >
              <label for="exampleFormControlTextarea1" style={textStyle}>Do you want to connect with people who share the same ethnicity?{props.question.eight}</label>
              <br></br>
              <textarea class="form-control form-control-lg" id="eight" rows="3" style={inputStyle}></textarea>
            </div>
          <br></br><br></br><br></br>
    </div> 
); 
    */

var FormQuestion = function FormQuestion(props) {
  return _react2.default.createElement(
    'ul',
    { className: 'question' },
    _react2.default.createElement(
      'div',
      { className: 'viewForm' },
      'What do you like to do?',
      _react2.default.createElement('br', null),
      props.question.one
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm' },
      'What struggles are you facing?',
      _react2.default.createElement('br', null),
      props.question.two
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm' },
      'What are you looking for in a person?',
      _react2.default.createElement('br', null),
      props.question.three
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm' },
      'How can someone help you?',
      _react2.default.createElement('br', null),
      ' ',
      props.question.four
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm' },
      'Why do you want to connect with someone?',
      _react2.default.createElement('br', null),
      props.question.five
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm' },
      'Do you want to meet in person or online?',
      _react2.default.createElement('br', null),
      ' ',
      props.question.six
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm' },
      'Do you want to connect with people from the same country?',
      _react2.default.createElement('br', null),
      ' ',
      props.question.seven
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm' },
      'Do you want to connect with people who share the same ethnicity?',
      _react2.default.createElement('br', null),
      ' ',
      props.question.eight
    ),
    _react2.default.createElement('br', null)
  );
};

function FormPage(props) {
  var formQuestions = props.questionform.map(function (question) {
    return _react2.default.createElement(FormQuestion, { key: question._id, question: question });
  });

  return _react2.default.createElement(
    'div',
    { id: 'question-air' },
    _react2.default.createElement(
      'ul',
      null,
      formQuestions
    )
  );
}

var Save = function (_React$Component) {
  _inherits(Save, _React$Component);

  function Save() {
    _classCallCheck(this, Save);

    var _this = _possibleConstructorReturn(this, (Save.__proto__ || Object.getPrototypeOf(Save)).call(this));

    _this.loadData = _this.loadData.bind(_this);

    _this.state = {
      questionform: []
    };

    return _this;
  }

  _createClass(Save, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this2 = this;

      var question = this.state.questionform;
      fetch("api/questionform").then(function (res) {
        if (res.ok) {
          res.json().then(function (json) {
            var questionform = [];
            json.records.forEach(function (question) {
              questionform.push(question);
            });
            _this2.setState({ questionform: questionform });
          });
        }
      }).catch(function (err) {
        alert("There was a problem: " + err.message);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SearchBar2.default, null),
        _react2.default.createElement(
          'center',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Save'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('hr', null),
            _react2.default.createElement(FormPage, { questionform: this.state.questionform }),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'a',
                  { className: 'btn btn-dark', role: 'button' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/form', style: { textDecoration: 'none', color: 'white' } },
                    'Edit'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'a',
                  { className: 'btn btn-dark', role: 'button' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/connect', style: { textDecoration: 'none', color: 'white' } },
                    'Find Friends'
                  )
                )
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null)
          )
        )
      );
    }
  }]);

  return Save;
}(_react2.default.Component);

exports.default = Save;

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(26);

var _reactRouter = __webpack_require__(19);

var _Profile = __webpack_require__(79);

var _Profile2 = _interopRequireDefault(_Profile);

var _Welcome = __webpack_require__(123);

var _Welcome2 = _interopRequireDefault(_Welcome);

var _Form = __webpack_require__(124);

var _Form2 = _interopRequireDefault(_Form);

var _Connect = __webpack_require__(122);

var _Connect2 = _interopRequireDefault(_Connect);

var _About = __webpack_require__(125);

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar() {
    _classCallCheck(this, SearchBar);

    return _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this));
  }

  _createClass(SearchBar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'nav',
            { className: 'navbar navbar-dark' },
            _react2.default.createElement('a', { className: 'navbar-brand' }),
            _react2.default.createElement(
              'a',
              { className: 'btn btn-dark', role: 'button' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/about', style: { textDecoration: 'none', color: 'white' } },
                'About'
              )
            ),
            _react2.default.createElement(
              'a',
              { className: 'btn btn-dark', role: 'button' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/connect', style: { textDecoration: 'none', color: 'white' } },
                'Connect With Students'
              )
            ),
            _react2.default.createElement(
              'a',
              { className: 'btn btn-dark', role: 'button' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/form', style: { textDecoration: 'none', color: 'white' } },
                'Survery'
              )
            ),
            _react2.default.createElement(
              'a',
              { className: 'btn btn-dark', role: 'button' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/profile', style: { textDecoration: 'none', color: 'white' } },
                'Profile'
              )
            ),
            _react2.default.createElement(
              'a',
              { className: 'btn btn-dark', role: 'button' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/', style: { textDecoration: 'none', color: 'white' } },
                'Sign Out'
              )
            ),
            _react2.default.createElement(
              'form',
              { className: 'form-inline' },
              _react2.default.createElement('input', { className: 'form-control mr-sm-2', type: 'search', placeholder: 'Search', 'aria-label': 'Search' }),
              _react2.default.createElement(
                'button',
                { className: 'btn btn-outline-dark my-2 my-sm-0', type: 'submit' },
                'Search'
              )
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null)
      );
    }
  }]);

  return SearchBar;
}(_react2.default.Component);

exports.default = SearchBar;

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(26);

var _reactRouter = __webpack_require__(19);

var _SearchBar = __webpack_require__(31);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // NEW: added the import for react.


var profile = {
  border: "2px solid black",
  marginTop: "10px",
  marginLeft: "5%",
  textAlign: "center",
  fontSize: "50px",
  height: "150px",
  width: "150px"
};
var formStyle = {
  width: '500px'
};

var Profile = function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile() {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this));
  }

  _createClass(Profile, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _SearchBar2.default,
          null,
          ' '
        ),
        _react2.default.createElement(
          'div',
          { className: 'row', style: { marginLeft: '85%' } },
          _react2.default.createElement(
            'div',
            { className: 'col' },
            _react2.default.createElement(
              'a',
              { className: 'btn btn-dark', role: 'button' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/rate', style: { textDecoration: 'none', color: 'white' } },
                'Rate'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col' },
            _react2.default.createElement(
              'a',
              { className: 'btn btn-dark', role: 'button' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/chat', style: { textDecoration: 'none', color: 'white' } },
                'Chat'
              )
            )
          )
        ),
        _react2.default.createElement(
          'h1',
          { style: { marginLeft: '5%' } },
          'Profile'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'picture', style: profile },
          'Profile picture'
        ),
        _react2.default.createElement('br', null),
        ' ',
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'form',
          { style: { marginLeft: '5%' } },
          _react2.default.createElement(
            'div',
            { 'class': 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'exampleFormControlInput1' },
                  'Email address'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('input', { type: 'text', readonly: true, 'class': 'form-control-plaintext', id: 'staticEmail', value: 'email@example.com', style: formStyle })
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { 'class': 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'exampleFormControlInput1' },
                  'School'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('input', { type: 'email', 'class': 'form-control', id: 'school', style: formStyle })
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { 'class': 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'exampleFormControlInput1' },
                  'Ethencity'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('input', { type: 'email', 'class': 'form-control', id: 'ethencity', style: formStyle })
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { 'class': 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'exampleFormControlInput1' },
                  'Country'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('input', { type: 'email', 'class': 'form-control', id: 'country', style: formStyle })
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { 'class': 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  { 'for': 'exampleFormControlInput1' },
                  'Bio:'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('textarea', { 'class': 'form-control form-control-lg', id: 'exampleFormControlTextarea1', rows: '3', style: formStyle })
              )
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'a',
          { className: 'btn btn-dark', role: 'button', style: { marginLeft: '5%' } },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '*', style: { textDecoration: 'none', color: 'white' } },
            'Edit'
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null)
      );
    }
  }]);

  return Profile;
}(_react2.default.Component);

exports.default = Profile;

/***/ })

},[126]);
//# sourceMappingURL=app.bundle.js.map