webpackJsonp([0],{

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(23);

var _reactRouter = __webpack_require__(19);

var _SearchBar = __webpack_require__(37);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // NEW: added the import for react.


var profile = {
  border: '2px solid black',
  marginTop: '10px',
  marginLeft: '5%',
  fontSize: '20px',
  height: '100px',
  width: '100px',
  textAlign: "center"
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
              'button',
              { className: 'btn btn-dark', role: 'button' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/*', style: { textDecoration: 'none', color: 'white' } },
                'Rate'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col' },
            _react2.default.createElement(
              'button',
              { className: 'btn btn-dark', role: 'button' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/*', style: { textDecoration: 'none', color: 'white' } },
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
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Email address: '
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('input', { type: 'text', className: 'form-control-plaintext', id: 'staticEmail', defaultValue: 'emailexamplel@umass.edu', style: formStyle })
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Academic: '
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('input', { type: 'email', className: 'form-control', id: 'ethencity', style: formStyle })
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'School: '
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('input', { type: 'email', className: 'form-control', id: 'school', style: formStyle })
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Country: '
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('input', { type: 'email', className: 'form-control', id: 'country', style: formStyle })
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Bio: '
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('textarea', { className: 'form-control form-control-lg', id: 'exampleFormControlTextarea1', rows: '3', style: formStyle })
              )
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'button',
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

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(85);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(19);

var _Welcome = __webpack_require__(238);

var _Welcome2 = _interopRequireDefault(_Welcome);

var _Profile = __webpack_require__(121);

var _Profile2 = _interopRequireDefault(_Profile);

var _About = __webpack_require__(240);

var _About2 = _interopRequireDefault(_About);

var _Survey = __webpack_require__(241);

var _Survey2 = _interopRequireDefault(_Survey);

var _NewSurvey = __webpack_require__(242);

var _NewSurvey2 = _interopRequireDefault(_NewSurvey);

var _FriendList = __webpack_require__(243);

var _FriendList2 = _interopRequireDefault(_FriendList);

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
    null,
    _react2.default.createElement(
      'div',
      { className: 'contents' },
      props.children
    )
  );
};

// For safety, we specify that the prop types received by the
// App component must require a "children" property. If we do
// not include this it will not compile.
App.propTypes = {
  children: _react2.default.PropTypes.object.isRequired
};

var RoutedApp = function RoutedApp() {
  return _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/', component: App },
      _react2.default.createElement(_reactRouter.IndexRoute, { component: _Welcome2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/connect', component: (0, _reactRouter.withRouter)(_FriendList2.default) }),
      _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/userSurvey', component: _Survey2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/form', component: _NewSurvey2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/profile', component: _Profile2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '*', component: NoMatch })
    )
  );
};

// This renders the JSX router inside the content node:
_reactDom2.default.render(_react2.default.createElement(RoutedApp, null), contentNode);

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(23);

var _reactRouter = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bodyPage = {
  width: '100%',
  height: '100%',
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

function validateLogin(first, last, degree, email, password, password2) {
  var errors = [];

  if (first.length === 0) {
    errors.push(alert("Firstname can't be empty"));
  }

  if (last.length === 0) {
    errors.push("Lastname can't be empty");
  }

  if (degree != "Undergraduate" || "Graduate") {
    errors.push("please type either Undergrate or Graduate");
  }

  if (email.split("").filter(function (x) {
    return x === "@";
  }).length !== 1) {
    errors.push(alert("Email should contain a @"));
  }
  if (email.indexOf(".edu") === -1) {
    errors.push(alert("Email should contain at least one dot"));
  }
  if (password.length < 6) {
    errors.push(alert("Password should be at least 6 characters long"));
  }

  if (password2.length != password.length) {
    errors.push(alert("Password does not match"));
  }

  return errors;
}

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
        'h1',
        { style: { marginLeft: '2%', marginTop: '15px' } },
        'Welcome to Intermingle'
      ),
      _react2.default.createElement(
        'center',
        { style: content },
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
            'Register'
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

    _this2.state = {
      errors: []
    };

    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    return _this2;
  }

  _createClass(Signup, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();

      var first = ReactDOM.findDOMNode(this._firstname).value;
      var last = ReactDOM.findDOMNode(this._lastname).value;
      var degree = ReactDOM.findDOMNode(this._inputDegree).value;
      var email = ReactDOM.findDOMNode(this._inputEmail).value;
      var password = ReactDOM.findDOMNode(this._inputPassword).value;
      var password2 = ReactDOM.findDOMNode(this._comfirmPassword).value;

      var errors = validateLogin(first, last, degree, email, password, password2);
      if (errors.length > 0) {
        this.setState({ errors: errors });
        return;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var errors = this.state.errors;

      return _react2.default.createElement(
        'form',
        { className: 'form-group', name: 'signup', onSubmit: this.handleSubmit },
        errors.map(function (error) {
          return _react2.default.createElement(
            'p',
            { key: error },
            'Error: ',
            error
          );
        }),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'h3',
            null,
            'Sign Up'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'label',
            null,
            'Name'
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'firstname', ref: function ref(firstname) {
                  return _this3._firstname = firstname;
                }, placeholder: 'First Name' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'lastname', ref: function ref(lastname) {
                  return _this3._lastname = lastname;
                }, placeholder: 'Last Name' })
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'Undergraduate or Graduate Student'
          ),
          _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'inputDegree', ref: function ref(inputDegree) {
              return _this3._inputDegree = inputDegree;
            }, placeholder: 'Degree' })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'School'
          ),
          _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'inputSchool', placeholder: 'School' })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'School Email'
          ),
          _react2.default.createElement('input', { type: 'email', className: 'form-control', id: 'inputEmail', ref: function ref(inputEmail) {
              return _this3._inputEmail = inputEmail;
            }, placeholder: 'Email' })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
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
            null,
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
            null,
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
            null,
            'Username'
          ),
          _react2.default.createElement('input', { type: 'email', className: 'form-control', id: 'inputUsername', placeholder: 'Username' })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'Password'
          ),
          _react2.default.createElement('input', { type: 'password', className: 'form-control', id: 'inputPassword', ref: function ref(inputPassword) {
              return _this3._inputPassword = inputPassword;
            }, placeholder: 'Password' })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'Confirm Password'
          ),
          _react2.default.createElement('input', { type: 'password', className: 'form-control', id: 'comfirmPassword', ref: function ref(comfirmPassword) {
              return _this3._comfirmPassword = comfirmPassword;
            }, placeholder: 'Confirm Password' })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-dark', type: 'submit' },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/form', style: { textDecoration: 'none', color: 'white' } },
            'Sign Up'
          )
        )
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
        'form',
        { className: 'form-group', name: 'login' },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'h3',
            null,
            'Register'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'label',
            null,
            'Username'
          ),
          _react2.default.createElement('input', { className: 'form-control', id: 'inputName', placeholder: 'Username' })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            null,
            'Password'
          ),
          _react2.default.createElement('input', { className: 'form-control', id: 'inputPassword', placeholder: 'Password' })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-dark', role: 'button' },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/about', style: { textDecoration: 'none', color: 'white' } },
            'Sign In'
          )
        )
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(23);

var _reactRouter = __webpack_require__(19);

var _Profile = __webpack_require__(121);

var _Profile2 = _interopRequireDefault(_Profile);

var _SearchBar = __webpack_require__(37);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var textStyle = {
  marginLeft: '15%',
  marginRight: '15%',
  // width: '850px',
  fontSize: '14px'
};

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
          'h1',
          { style: { marginLeft: '2%' } },
          'About'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'center',
          null,
          _react2.default.createElement(
            'div',
            { className: 'about', style: textStyle },
            _react2.default.createElement(
              'h3',
              null,
              'Welcome to Intermingle.'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'strong',
                null,
                'Overview: '
              ),
              'One of the biggest adjustments for students is going away from home to college. For international students, it is more of an adjustment than for domestic students. These students have to adjust going to school away from their family but also experiencing a new culture. This adjustment can cause stress for these students that affects their academic performance and their experience living in the United States. This application is for both international and domestic student to find people and connect within their University. Below is a list of the descripition of each page, the function of their page, and what features of the page needs to be implemented.'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'strong',
                null,
                '1. Welcome: '
              ),
              ' This is the home page where users either signin and signup. If the user is signing up then they would fill out the form that will directly take them to the survey once completed. The signin page is for returning users where they fill in their username (set to their email) and the password where they will be directed to the about page.'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'strong',
                null,
                '2. About: '
              ),
              ' The about page will give them the infomation about the application and its purpose. When a returning user signing in, it will direct them to the about page. ',
              _react2.default.createElement(
                'strong',
                null,
                'Note:'
              ),
              ' the content is the same as the About.md file as well.'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'strong',
                null,
                '3. Connect With Friends: '
              ),
              ' This page is where users will look for friends. Each person has their own card that gives the user the name, if they are a undergraduate or graduate student, school, the year based on graduation, their overall rating, and the bio that describes who they are. This page also has two filters implemented. One filter is where users can look for either undergraduates or graduate students and the second filter is if the user is trying to find friends from a certain rating. If the user likes a person, then they can click on their card that will direct them to their profile to find the chat button to start a conversation with them. Their is also a rating button where the user can go rate the person and also see other reviews about how others describe this person. Currently the list of friends is mock data running from mongo scripts/init.mongo.js.'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'strong',
                null,
                '4. Survey: '
              ),
              'This page is where the user will see their survey. Currently this page show the survey sections and questions with no data that is fill. To fill out the survey the user will click on the new survey button and bring them to a new survey page. The user will fill the form then press the save button then next click on the find friends button that will give them a list of friends that would be a good match for them based on the survey. Currenlty the list of friends is just mock data that does not filiter it to their survey. When the user presses the save button, they can go back to the survey button and scrool down and see the new updated survey they have filled out.'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'strong',
                null,
                '5. Profile: '
              ),
              'This is the user profile where they can see thier email, wether they are a undergraduate or graduate student, the school, which country they are from, and the bio they have written about themseleves. There is an edit button when the user wants to change their profile, a chat button where the user can go talk to their friends, and a rating button to see their reviews. Currently none of the buttons on the page work.'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'strong',
                null,
                '6. Logout Button:'
              ),
              ' This is a button not a page. When the user clicks on this button, it will direct them back to the welcome page.'
            )
          )
        )
      );
    }
  }]);

  return About;
}(_react2.default.Component);

exports.default = About;

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(23);

var _reactRouter = __webpack_require__(19);

var _SearchBar = __webpack_require__(37);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var formStyle = {
  marginLeft: '5%',
  marginRight: '5%',
  fontSize: '20px'
};

var FormQuestion = function FormQuestion(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      { style: { marginLeft: '2%' } },
      '1. What are the people you want to connect with?'
    ),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      '1a. Undergraduates, Graduates Students, or both?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        null,
        'My Answer: '
      ),
      props.question.one
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      '1b. Graduating year?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        null,
        'My Answer: '
      ),
      props.question.two
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      '1c. Major?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        null,
        'My Answer:'
      ),
      props.question.three
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      '1d. The department as your major?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        null,
        'My Answer: '
      ),
      props.question.four
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      '1e. Ethnicity?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        null,
        'My Answer: '
      ),
      props.question.five
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      '1f. Country?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        null,
        'My Answer: '
      ),
      props.question.six
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      '1g. Religion?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        null,
        'My Answer: '
      ),
      props.question.seven
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      'Do you want to connect with people who share the same ethnicity?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        null,
        'My Answer: '
      ),
      props.question.eight
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'h3',
      { style: { marginLeft: '2%' } },
      '2. How much do you know about your campus and the aera'
    ),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      '2a. I know the campus of my school?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        null,
        'My Answer: '
      ),
      props.question.eight
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      '2b. I know the area outside of the campus?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        null,
        'My Answer: '
      ),
      props.question.nine
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      '2c. I know lots of places to live off campus?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        null,
        'My Answer: '
      ),
      props.question.ten
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      '2d. I have a job on campus?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        null,
        'My Answer: '
      ),
      props.question.eleven
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      '2e. I know useful resources on campus?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        null,
        'My Answer: '
      ),
      props.question.tweleve
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      '2f. I am involved with clubs/organization on campus?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        null,
        'My Answer: '
      ),
      props.question.thirteen
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'h3',
      { style: { marginLeft: '2%' } },
      '3. What are your hobbies?'
    ),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      '3a. Select all hobbies that apply to you.',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        null,
        'My Answer: '
      ),
      ' ',
      props.question.categories
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      '3b. If there is a hobbie that was not listest above, type your answers here. Please explain more about your hobbies.',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        null,
        'My Answer: '
      ),
      props.question.openOne
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'h3',
      { style: { marginLeft: '2%' } },
      '4. What are you hoping to get out of this website?'
    ),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      '4a. Getting help or receiving help?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        null,
        'My Answer: '
      ),
      props.question.fourteen
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      '4b. Someone that has a car?.',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        null,
        'My Answer: '
      ),
      props.question.fifteen
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      '4c. A guide around the city/campus?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        null,
        'My Answer: '
      ),
      props.question.sixteen
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'div',
      { className: 'viewForm', style: formStyle },
      '4d. Just for fun?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'strong',
        null,
        'My Answer: '
      ),
      props.question.seventeen
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('hr', null)
  );
};

function FormPage(props) {
  var formQuestions = props.questionform.map(function (question) {
    return _react2.default.createElement(FormQuestion, { key: question._id, question: question });
  });

  return _react2.default.createElement(
    'div',
    { id: 'question-air' },
    formQuestions
  );
}

var Survey = function (_React$Component) {
  _inherits(Survey, _React$Component);

  function Survey() {
    _classCallCheck(this, Survey);

    var _this = _possibleConstructorReturn(this, (Survey.__proto__ || Object.getPrototypeOf(Survey)).call(this));

    _this.loadData = _this.loadData.bind(_this);

    _this.state = {
      questionform: []
    };

    return _this;
  }

  _createClass(Survey, [{
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
          'h1',
          { style: { marginLeft: '2%' } },
          'My Survey'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(FormPage, { questionform: this.state.questionform }),
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
                  { className: 'btn btn-dark', role: 'button' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/form', style: { textDecoration: 'none', color: 'white' } },
                    'New Survery'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-dark', role: 'button' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/*', style: { textDecoration: 'none', color: 'white' } },
                    'Edit'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-dark', role: 'button', Link: '/connect' },
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

  return Survey;
}(_react2.default.Component);

exports.default = Survey;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(23);

var _reactRouter = __webpack_require__(19);

var _SearchBar = __webpack_require__(37);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  fontSize: '20px',
  cursor: 'pointer'

  //Checkboxes

};
var NewSurvey = function (_React$Component) {
  _inherits(NewSurvey, _React$Component);

  function NewSurvey(props) {
    _classCallCheck(this, NewSurvey);

    var _this = _possibleConstructorReturn(this, (NewSurvey.__proto__ || Object.getPrototypeOf(NewSurvey)).call(this, props));

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
      ten: '',
      eleven: '',
      tweleve: '',
      thirteen: '',
      categories: [{ name: 'Sports', value: 'Sports' }, { name: 'Dance', value: 'Dance' }, { name: 'Music', value: 'Music' }, { name: 'Art', value: 'Art' }, { name: 'Fashion', value: 'Fashion' }, { name: 'Make up', value: 'Make up' }, { name: 'Traveling', value: 'Traveling' }, { name: 'Hiking', value: 'Hiking' }, { name: 'Gardening', value: 'Gardening' }, { name: 'Camping', value: 'Camping' }, { name: 'Video Games', value: 'Video Games' }, { name: 'Photography', value: 'Photography' }, { name: 'Cars', value: 'Cars' }, { name: 'Movies', value: 'Movies' }, { name: 'Books', value: 'Books' }, { name: 'Volunteer', value: 'Volunteer' }, { name: 'Comedy', value: 'Comedy' }, { name: 'Games', value: 'Games' }, { name: 'Building', value: 'Building' }, { name: 'Fishing', value: 'Fishing' }, { name: 'Theater', value: 'Theater' }, { name: 'Baking/Cooking', value: 'Baking/Cooking' }, { name: 'Writing', value: 'Writing' }, { name: 'Other', value: 'Other' }],
      openOne: ' ',
      fourteen: '',
      fifteen: '',
      sixteen: '',
      seventeen: ''
    };

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleCheck = _this.handleCheck.bind(_this);
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
    _this.elevenChange = _this.elevenChange.bind(_this);
    _this.tweleveChange = _this.tweleveChange.bind(_this);
    _this.thirteenChange = _this.thirteenChange.bind(_this);
    _this.fourteenChange = _this.fourteenChange.bind(_this);
    _this.fifteenChange = _this.fifteenChange.bind(_this);
    _this.sixteenChange = _this.sixteenChange.bind(_this);
    _this.seventeenChange = _this.seventeenChange.bind(_this);
    return _this;
  }

  _createClass(NewSurvey, [{
    key: 'handleCheck',
    value: function handleCheck(e) {
      var categories = this.state.categories;
      var index = void 0;

      if (e.target.checked) {
        categories.push(+e.target.value);
      } else {
        index = categories.indexOf(+e.value);
        categories.splice(index, 1);
      }

      this.setState(_defineProperty({}, categories, e.target.value));
    }
  }, {
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
    key: 'elevenChange',
    value: function elevenChange(e) {
      this.setState({ eleven: e.target.value });
    }
  }, {
    key: 'tweleveChange',
    value: function tweleveChange(e) {
      this.setState({ tweleve: e.target.value });
    }
  }, {
    key: 'thirteenChange',
    value: function thirteenChange(e) {
      this.setState({ thirteen: e.target.value });
    }
  }, {
    key: 'fourteenChange',
    value: function fourteenChange(e) {
      this.setState({ fourteen: e.target.value });
    }
  }, {
    key: 'fifteenChange',
    value: function fifteenChange(e) {
      this.setState({ fifteen: e.target.value });
    }
  }, {
    key: 'sixteenChange',
    value: function sixteenChange(e) {
      this.setState({ sixteen: e.target.value });
    }
  }, {
    key: 'seventeenChange',
    value: function seventeenChange(e) {
      this.setState({ seventeen: e.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.question;
      var submitReq = {
        "one": form.inlineRadio1.value,
        "two": form.inlineRadio2.value,
        "three": form.inlineRadio3.value,
        "four": form.inlineRadio4.value,
        "five": form.inlineRadio5.value,
        "six": form.inlineRadio6.value,
        "seven": form.inlineRadio7.value,
        "eight": form.inlineRadio8.value,
        "nine": form.inlineRadio9.value,
        "ten": form.inlineRadio10.value,
        "eleven": form.inlineRadio11.value,
        "tweleve": form.inlineRadio12.value,
        "thirteen": form.inlineRadio13.value,
        "openOne": form.openOne.value,
        "categories": form.defaultCheck.value,
        "fourteen": form.inlineRadio14.value,
        "fifteen": form.inlineRadio15.value,
        "sixteen": form.inlineRadio16.value,
        "seventeen": form.inlineRadio17.value
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
        _react2.default.createElement(
          _SearchBar2.default,
          null,
          ' '
        ),
        _react2.default.createElement(
          'h1',
          { style: { marginLeft: '2%' } },
          'Survery Questions'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'form',
          { className: 'form-group', name: 'question', onSubmit: this.handleSubmit },
          _react2.default.createElement(
            'h3',
            { style: { marginLeft: '2%' } },
            '1. What are the people you want to connect with?'
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
                  null,
                  '1a. Undergraduates or Graduates Students'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions1', id: 'inlineRadio1', value: 'In person', checked: this.state.one === 'In person', onChange: this.oneChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio1' },
                  'Undergraduates'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions1', id: 'inlineRadio1', value: 'Online', checked: this.state.one === 'Online', onChange: this.oneChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio1' },
                  'Graduates'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions1', id: 'inlineRadio1', value: 'Both', checked: this.state.one === 'Both', onChange: this.oneChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio1' },
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
                  null,
                  '1b. Graduating year?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions2', id: 'inlineRadio2', value: 'Undergraduates', checked: this.state.two === 'Undergraduates', onChange: this.twoChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio1' },
                  'Same'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions2', id: 'inlineRadio2', value: 'Graduates', checked: this.state.two === 'Graduates', onChange: this.twoChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio2' },
                  'Different'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions2', id: 'inlineRadio2', value: 'Both', checked: this.state.two === 'Both', onChange: this.twoChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio2' },
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
                  null,
                  '1c. Major?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions3', id: 'inlineRadio3', value: 'Same', checked: this.state.three === 'Same', onChange: this.threeChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio3' },
                  'Same'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions3', id: 'inlineRadio3', value: 'Different', checked: this.state.three === 'Different', onChange: this.threeChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio3' },
                  'Different'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions3', id: 'inlineRadio3', value: 'Both', checked: this.state.three === 'Both', onChange: this.threeChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio3' },
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
                  null,
                  '1d. The department as your major?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions4', id: 'inlineRadio4', value: 'Same', checked: this.state.four === 'Same', onChange: this.fourChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio1' },
                  'Same'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions4', id: 'inlineRadio4', value: 'Different', checked: this.state.four === 'Different', onChange: this.fourChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio4' },
                  'Different'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions4', id: 'inlineRadio4', value: 'Both', checked: this.state.four === 'Both', onChange: this.fourChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio4' },
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
                  null,
                  '1e. Ethnicity?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions5', id: 'inlineRadio5', value: 'Same', checked: this.state.five === 'Same', onChange: this.fiveChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio5' },
                  'Same'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions5', id: 'inlineRadio5', value: 'Different', checked: this.state.five === 'Different', onChange: this.fiveChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio5' },
                  'Different'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions5', id: 'inlineRadio5', value: 'Both', checked: this.state.five === 'Both', onChange: this.fiveChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio5' },
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
                  null,
                  '1f. Country?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions6', id: 'inlineRadio6', value: 'Same', checked: this.state.six === 'Same', onChange: this.sixChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio6' },
                  'Same'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions6', id: 'inlineRadio6', value: 'Different', checked: this.state.six === 'Different', onChange: this.sixChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio6' },
                  'Different'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions6', id: 'inlineRadio6', value: 'Both', checked: this.state.six === 'Both', onChange: this.sixChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio2' },
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
                  null,
                  '1g. Religion?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions7', id: 'inlineRadio7', value: 'Yes', checked: this.state.seven === 'Yes', onChange: this.sevenChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio7' },
                  'Same'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions7', id: 'inlineRadio7', value: 'No', checked: this.state.seven === 'No', onChange: this.sevenChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio7' },
                  'Different'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions7', id: 'inlineRadio7', value: 'Both', checked: this.state.seven === 'Both', onChange: this.sevenChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio7' },
                  'Both'
                )
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'h3',
            { style: { marginLeft: '2%' } },
            '2. How much do you know about your campus and the aera?'
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
                  null,
                  '2a. I know the campus of my school?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions8', id: 'inlineRadio8', value: 'Very Well', checked: this.state.eight === 'Same', onChange: this.eightChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio8' },
                  'Very Well'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions8', id: 'inlineRadio8', value: 'Well', checked: this.state.eight === 'Well', onChange: this.eightChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio8' },
                  'Well'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions8', id: 'inlineRadio8', value: 'In The Middle', checked: this.state.eight === 'In The Middle', onChange: this.eightChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio8' },
                  'In The Middle'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions8', id: 'inlineRadio8', value: 'Very Little', checked: this.state.eight === 'Very Little', onChange: this.eightChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio8' },
                  'Very Little'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions8', id: 'inlineRadio8', value: 'None', checked: this.state.eight === 'None', onChange: this.eightChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio8' },
                  'None'
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
                  null,
                  '2b. I know the aera outside the campus?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions9', id: 'inlineRadio9', value: 'Very Well', checked: this.state.nine === 'Same', onChange: this.nineChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio8' },
                  'Very Well'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions9', id: 'inlineRadio9', value: 'Well', checked: this.state.nine === 'Well', onChange: this.nineChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio8' },
                  'Well'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions9', id: 'inlineRadio9', value: 'In The Middle', checked: this.state.nine === 'In The Middle', onChange: this.nineChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio8' },
                  'In The Middle'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions9', id: 'inlineRadio9', value: 'Very Little', checked: this.state.nine === 'Very Little', onChange: this.nineChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio8' },
                  'Very Little'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions9', id: 'inlineRadio9', value: 'None', checked: this.state.nine === 'None', onChange: this.nineChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio8' },
                  'None'
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
                  null,
                  '2c. I know lots of places to live off campus?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions10', id: 'inlineRadio10', value: 'Yes', checked: this.state.ten === 'Yes', onChange: this.tenChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio8' },
                  'Yes'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions10', id: 'inlineRadio10', value: 'No', checked: this.state.ten === 'No', onChange: this.tenChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio8' },
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
                  null,
                  '2d. I have a job on campus?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions11', id: 'inlineRadio11', value: 'Yes', checked: this.state.eleven === 'Yes', onChange: this.elevenChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio8' },
                  'Yes'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions11', id: 'inlineRadio11', value: 'No', checked: this.state.eleven === 'No', onChange: this.elevenChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio8' },
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
                  null,
                  '2e. I know useful resources on campus?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions12', id: 'inlineRadio12', value: 'Yes', checked: this.state.tweleve === 'Yes', onChange: this.tweleveChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio8' },
                  'Yes'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions12', id: 'inlineRadio12', value: 'No', checked: this.state.tweleve === 'No', onChange: this.tweleveChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio8' },
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
                  null,
                  '2f. I am involved with clubs/organization on campus?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions13', id: 'inlineRadio13', value: 'Yes', checked: this.state.thirteen === 'Yes', onChange: this.thirteenChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio8' },
                  'Yes'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions13', id: 'inlineRadio13', value: 'No', checked: this.state.thirteen === 'No', onChange: this.thirteenChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio8' },
                  'No'
                )
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'h3',
            { style: { marginLeft: '2%' } },
            '3. What are your hobbies'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'div',
              { className: 'col', style: textStyle },
              _react2.default.createElement(
                'label',
                null,
                '3a. Select all hobbies that apply to you.'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group', id: 'hobbies' },
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck', checked: this.state.categories[0].false, name: this.state.categories[0].name, value: this.state.categories[0].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck' },
                    'Sports'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck1', checked: this.state.categories[1].false, name: this.state.categories[1].name, value: this.state.categories[1].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck1' },
                    'Dance'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck2', checked: this.state.categories[2].false, name: this.state.categories[2].name, value: this.state.categories[2].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck2' },
                    'Music'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck3', checked: this.state.categories[3].false, name: this.state.categories[3].name, value: this.state.categories[3].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck3' },
                    'Art'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck4', checked: this.state.categories[4].false, name: this.state.categories[4].name, value: this.state.categories[4].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck4' },
                    'Fashion'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck5', checked: this.state.categories[5].false, name: this.state.categories[5].name, value: this.state.categories[5].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck5' },
                    'Make up'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck6', checked: this.state.categories[6].false, name: this.state.categories[6].name, value: this.state.categories[6].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck6' },
                    'Traveling'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck7', checked: this.state.categories[7].false, name: this.state.categories[7].name, value: this.state.categories[7].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck7' },
                    'Hiking'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck8', checked: this.state.categories[8].false, name: this.state.categories[8].name, value: this.state.categories[8].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck8' },
                    'Gardening'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck9', checked: this.state.categories[9].false, name: this.state.categories[9].name, value: this.state.categories[9].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck9' },
                    'Camping'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck10', checked: this.state.categories[10].false, name: this.state.categories[10].name, value: this.state.categories[10].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck9' },
                    'Video Games'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck11', checked: this.state.categories[11].false, name: this.state.categories[11].name, value: this.state.categories[11].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck11' },
                    'Photography'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck12', checked: this.state.categories[12].false, name: this.state.categories[12].name, value: this.state.categories[12].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck12' },
                    'Cars'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck13', checked: this.state.categories[13].false, name: this.state.categories[13].name, value: this.state.categories[13].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck13' },
                    'Movies'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck14', checked: this.state.categories[14].false, name: this.state.categories[14].name, value: this.state.categories[14].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck14' },
                    'Books'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck15', checked: this.state.categories[15].false, name: this.state.categories[15].name, value: this.state.categories[15].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck11' },
                    'Volunteer'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck16', checked: this.state.categories[16].false, name: this.state.categories[16].name, value: this.state.categories[16].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck16' },
                    'Comedy'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck17', checked: this.state.categories[17].false, name: this.state.categories[17].name, value: this.state.categories[17].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck17' },
                    'Games'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row', style: textStyle },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck18', checked: this.state.categories[18].false, name: this.state.categories[18].name, value: this.state.categories[18].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck18' },
                    'Building'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck19', checked: this.state.categories[19].false, name: this.state.categories[19].name, value: this.state.categories[19].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck19' },
                    'Fishing'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck20', checked: this.state.categories[20].false, name: this.state.categories[20].name, value: this.state.categories[20].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck20' },
                    'Theater'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck21', checked: this.state.categories[21].false, name: this.state.categories[21].name, value: this.state.categories[21].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck21' },
                    'Baking/Cooking'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck22', checked: this.state.categories[22].false, name: this.state.categories[22].name, value: this.state.categories[22].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck22' },
                    'Writing'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement(
                  'div',
                  { 'class': 'form-check' },
                  _react2.default.createElement('input', { 'class': 'form-check-input', style: formStyle, type: 'checkbox', id: 'defaultCheck23', checked: this.state.categories[23].false, name: this.state.categories[23].name, value: this.state.categories[23].value, onChange: this.setCategory }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'form-check-label', 'for': 'defaultCheck23' },
                    'Other'
                  )
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
                  null,
                  '3b. If there is a hobbie that was not listest above, please type your answers here and  more details about your choosen hobbies.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('textarea', { type: 'text', className: 'form-control', id: 'openOne', style: inputStyle })
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'h3',
            { style: { marginLeft: '2%' } },
            '4. What are you hoping to get out of this website?'
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
                  null,
                  '4a. Getting help or receiving help?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions14', id: 'inlineRadio14', value: 'Getting Help', checked: this.state.fourteen === 'Getting Help', onChange: this.fourteenChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio7' },
                  'Getting Help'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions14', id: 'inlineRadio14', value: 'Receiving Help', checked: this.state.fourteen === 'Receiving Help', onChange: this.fourteenChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio7' },
                  'Receiving Help'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions14', id: 'inlineRadio14', value: 'Both', checked: this.state.fourteen === 'Both', onChange: this.fourteenChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio7' },
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
                  null,
                  '4b. Someone that has a car?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions15', id: 'inlineRadio15', value: 'Yes', checked: this.state.fifteen === 'Yes', onChange: this.fifteenChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio7' },
                  'Yes'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions15', id: 'inlineRadio15', value: 'No', checked: this.state.fifteen === 'No', onChange: this.fifteenChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio7' },
                  'No'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions15', id: 'inlineRadio15', value: 'Both', checked: this.state.fifteen === 'Both', onChange: this.fifteenChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio7' },
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
                  null,
                  '4c. A guide around the city/campus?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions16', id: 'inlineRadio16', value: 'Yes', checked: this.state.sixteen === 'Yes', onChange: this.sixteenChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio7' },
                  'Yes'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions16', id: 'inlineRadio16', value: 'No', checked: this.state.sixteen === 'No', onChange: this.sixteenChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio7' },
                  'No'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions16', id: 'inlineRadio16', value: 'Both', checked: this.state.sixteen === 'Both', onChange: this.sixteenChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio7' },
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
                  null,
                  '4d. Just for fun?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions17', id: 'inlineRadio17', value: 'Yes', checked: this.state.seventeen === 'Yes', onChange: this.seventeenChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio7' },
                  'Yes'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-check form-check-inline', style: formStyle },
                _react2.default.createElement('input', { className: 'form-check-input', style: { cursor: 'pointer' }, type: 'radio', name: 'inlineRadioOptions17', id: 'inlineRadio17', value: 'No', checked: this.state.seventeen === 'No', onChange: this.seventeenChange }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'inlineRadio7' },
                  'No'
                )
              )
            )
          ),
          _react2.default.createElement('br', null),
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
                  { className: 'btn btn-dark', type: 'submit', value: 'Submit' },
                  'Save'
                )
              )
            )
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

  return NewSurvey;
}(_react2.default.Component);

exports.default = NewSurvey;

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

__webpack_require__(23);

var _reactRouter = __webpack_require__(19);

var _FriendFilter = __webpack_require__(244);

var _FriendFilter2 = _interopRequireDefault(_FriendFilter);

var _SearchBar = __webpack_require__(37);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// NEW
// (1) Added a function to delete an issue given the issue ID.
// (2) Added a button to the interface to provide the delete functionality.
var FriendCard = function FriendCard(props) {
  return _react2.default.createElement(
    _reactRouter.Link,
    { to: '/profile', style: { textDecoration: 'none', color: 'black' } },
    _react2.default.createElement(
      'div',
      { className: 'card border-dark mb-3', style: { width: '400px', marginLeft: '25%' } },
      _react2.default.createElement(
        'div',
        { className: 'card-body h-100' },
        _react2.default.createElement(
          'h5',
          { className: 'card-title' },
          'Name: ',
          props.friend.name,
          ' '
        ),
        _react2.default.createElement(
          'h6',
          { className: 'card-subtitle mb-2', id: 'academic' },
          'Academic: ',
          props.friend.status
        ),
        _react2.default.createElement(
          'h6',
          { className: 'card-subtitle mb-2', id: 'school' },
          'School: ',
          props.friend.school
        ),
        _react2.default.createElement(
          'h6',
          { className: 'card-subtitle mb-2', id: 'year' },
          'Year: ',
          props.friend.year
        ),
        _react2.default.createElement(
          'h6',
          { className: 'card-subtitle mb-2', id: 'rate' },
          'Rate: ',
          props.friend.rate
        ),
        _react2.default.createElement(
          'p',
          { className: 'card-text', id: 'bio' },
          'Bio: ',
          props.friend.bio
        ),
        _react2.default.createElement('br', null)
      )
    )
  );
};

FriendCard.propTypes = {
  friend: _react2.default.PropTypes.object.isRequired
};
// NEW END

function FriendTable(props) {
  var friendCard = props.friends.map(function (friend) {
    return _react2.default.createElement(FriendCard, { key: friend._id, friend: friend });
  });
  return _react2.default.createElement(
    'div',
    { className: 'card-deck' },
    friendCard
  );
}

// NEW
FriendTable.propTypes = {
  friends: _react2.default.PropTypes.array.isRequired
};
// NEW END

var FriendList = function (_React$Component) {
  _inherits(FriendList, _React$Component);

  function FriendList() {
    _classCallCheck(this, FriendList);

    var _this = _possibleConstructorReturn(this, (FriendList.__proto__ || Object.getPrototypeOf(FriendList)).call(this));

    _this.state = { friends: [] };

    _this.loadData = _this.loadData.bind(_this);
    _this.setFilter = _this.setFilter.bind(_this);
    return _this;
  }

  _createClass(FriendList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }

    // This method is part of the React component "lifecycle". It is invoked
    // when a component property is updated. In this case, we are using it to
    // load new data when the props.location object is changed. In particular,
    // when we click on a link that causes react router to change the view to
    // the IssueList and the URL changes (for example, a search query) it
    // causes the componentDidUpdate() method to be invoked.

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var oldQuery = prevProps.location.query;
      var newQuery = this.props.location.query;
      if (oldQuery.status === newQuery.status && oldQuery.rate_gte === newQuery.rate_gte && oldQuery.rate_lte === newQuery.rate_lte) {
        return;
      }
      this.loadData();
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this2 = this;

      // Note: React Router automatically adds a "location" property to a react
      //       object's "props". The object that the "location" property refers
      //       to also has a "search" property which is the query string of the
      //       URL, including the '?' character  -  which is why we do not need
      //       to add it to the string in the `fetch()` call.
      fetch('/api/friends' + this.props.location.search).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            var friends = [];
            data.records.forEach(function (friend) {
              friends.push(friend);
            });
            _this2.setState({ friends: data.records });
          });
        }
      }).catch(function (err) {
        alert("Error in fetching data from server:", err);
      });
    }
  }, {
    key: 'setFilter',
    value: function setFilter(query) {
      this.props.router.push({ pathname: this.props.location.pathname, query: query });
    }
  }, {
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
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_FriendFilter2.default, { setFilter: this.setFilter, initFilter: this.props.location.query }),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(FriendTable, { friends: this.state.friends })
      );
    }
  }]);

  return FriendList;
}(_react2.default.Component);

exports.default = FriendList;


FriendList.propTypes = {
  location: _react2.default.PropTypes.object.isRequired,
  router: _react2.default.PropTypes.object
};

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var inputStyle = {
  //   marginRight: '5%',
  marginLeft: '2%'
};

var FriendFilter = function (_React$Component) {
  _inherits(FriendFilter, _React$Component);

  function FriendFilter(props) {
    _classCallCheck(this, FriendFilter);

    var _this = _possibleConstructorReturn(this, (FriendFilter.__proto__ || Object.getPrototypeOf(FriendFilter)).call(this, props));

    _this.state = {
      status: props.initFilter.status || '',
      rate_gte: props.initFilter.rate_gte || '',
      rate_lte: props.initFilter.rate_lte || '',
      changed: false
    };

    _this.onChangeStatus = _this.onChangeStatus.bind(_this);
    _this.onChangeRateGte = _this.onChangeRateGte.bind(_this);
    _this.onChangeRateLte = _this.onChangeRateLte.bind(_this);
    _this.applyFilter = _this.applyFilter.bind(_this);
    _this.resetFilter = _this.resetFilter.bind(_this);
    _this.clearFilter = _this.clearFilter.bind(_this);
    return _this;
  }

  _createClass(FriendFilter, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        status: newProps.initFilter.status || '',
        rate_gte: newProps.initFilter.rate_gte || '',
        rate_lte: newProps.initFilter.rate_lte || '',
        changed: false
      });
    }
  }, {
    key: 'resetFilter',
    value: function resetFilter() {
      this.setState({
        status: this.props.initFilter.status || '',
        rate_gte: this.props.initFilter.rate_gte || '',
        rate_lte: this.props.initFilter.rate_lte || '',
        changed: false
      });
    }
  }, {
    key: 'onChangeStatus',
    value: function onChangeStatus(e) {
      this.setState({ status: e.target.value, changed: true });
    }
  }, {
    key: 'onChangeRateGte',
    value: function onChangeRateGte(e) {
      var rateString = e.target.value;
      if (rateString.match(/^(\d*\.)?\d+$/)) {
        this.setState({ rate_gte: e.target.value, changed: true });
      }
    }
  }, {
    key: 'onChangeRateLte',
    value: function onChangeRateLte(e) {
      var rateString = e.target.value;
      if (rateString.match(/^(\d*\.)?\d+$/)) {
        this.setState({ rate_lte: e.target.value, changed: true });
      }
    }
  }, {
    key: 'clearFilter',
    value: function clearFilter(e) {
      this.props.setFilter({});
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter() {
      var newFilter = {};
      if (this.state.status) newFilter.status = this.state.status;
      if (this.state.rate_gte) newFilter.rate_gte = this.state.rate_gte;
      if (this.state.rate_lte) newFilter.rate_lte = this.state.rate_lte;
      this.props.setFilter(newFilter);
    }
  }, {
    key: 'clearFilter',
    value: function clearFilter() {
      this.props.setFilter({});
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'label',
          { style: inputStyle },
          'Academic:'
        ),
        _react2.default.createElement(
          'select',
          { value: this.state.status, onChange: this.onChangeStatus, style: { marginLeft: '4px', cursor: 'pointer' } },
          _react2.default.createElement(
            'option',
            { value: '', style: { cursor: 'pointer' } },
            '(Any)'
          ),
          _react2.default.createElement(
            'option',
            { style: { cursor: 'pointer' }, value: 'Undergraduate' },
            'Undergraduate'
          ),
          _react2.default.createElement(
            'option',
            { style: { cursor: 'pointer' }, value: 'Graduate' },
            'Graduate'
          )
        ),
        '\xA0 Rate between:',
        _react2.default.createElement('input', { size: 5, value: this.state.rate_gte, onChange: this.onChangeRateGte }),
        '\xA0-\xA0',
        _react2.default.createElement('input', { size: 5, value: this.state.rate_lte, onChange: this.onChangeRateLte }),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-dark', style: inputStyle, onClick: this.applyFilter },
          'Apply'
        ),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-dark', style: inputStyle, onClick: this.resetFilter, disabled: !this.state.changed },
          'Reset'
        ),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-dark', style: inputStyle, onClick: this.clearFilter },
          'Clear'
        )
      );
    }
  }]);

  return FriendFilter;
}(_react2.default.Component);

exports.default = FriendFilter;


FriendFilter.propTypes = {
  setFilter: _react2.default.PropTypes.func.isRequired,
  initFilter: _react2.default.PropTypes.object.isRequired
};

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(23);

var _reactRouter = __webpack_require__(19);

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
              'button',
              { className: 'btn btn-dark' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/about', style: { textDecoration: 'none', color: 'white' } },
                'About'
              )
            ),
            _react2.default.createElement(
              'button',
              { className: 'btn btn-dark' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/connect', style: { textDecoration: 'none', color: 'white' } },
                'Connect With Students'
              )
            ),
            _react2.default.createElement(
              'button',
              { className: 'btn btn-dark' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/userSurvey', style: { textDecoration: 'none', color: 'white' } },
                'Survery'
              )
            ),
            _react2.default.createElement(
              'button',
              { className: 'btn btn-dark' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/profile', style: { textDecoration: 'none', color: 'white' } },
                'Profile'
              )
            ),
            _react2.default.createElement(
              'button',
              { className: 'btn btn-dark' },
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

/***/ })

},[122]);
//# sourceMappingURL=app.bundle.js.map