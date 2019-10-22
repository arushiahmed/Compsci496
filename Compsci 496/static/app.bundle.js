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

var _reactRouter = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IssueFilter = function (_React$Component) {
  _inherits(IssueFilter, _React$Component);

  function IssueFilter() {
    _classCallCheck(this, IssueFilter);

    var _this = _possibleConstructorReturn(this, (IssueFilter.__proto__ || Object.getPrototypeOf(IssueFilter)).call(this));

    _this.clearFilter = _this.clearFilter.bind(_this);
    _this.setFilterOpen = _this.setFilterOpen.bind(_this);
    _this.setFilterAssigned = _this.setFilterAssigned.bind(_this);
    return _this;
  }

  _createClass(IssueFilter, [{
    key: 'setFilterOpen',
    value: function setFilterOpen(e) {
      e.preventDefault();
      this.props.setFilter({ status: 'Open' });
    }
  }, {
    key: 'setFilterAssigned',
    value: function setFilterAssigned(e) {
      e.preventDefault();
      this.props.setFilter({ status: 'Assigned' });
    }
  }, {
    key: 'clearFilter',
    value: function clearFilter(e) {
      e.preventDefault();
      this.props.setFilter({});
    }
  }, {
    key: 'render',
    value: function render() {
      var Separator = function Separator() {
        return _react2.default.createElement(
          'span',
          null,
          ' | '
        );
      };
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'a',
          { href: '#', onClick: this.clearFilter },
          'All Issues'
        ),
        _react2.default.createElement(Separator, null),
        _react2.default.createElement(
          'a',
          { href: '#', onClick: this.setFilterOpen },
          'Open Issues'
        ),
        _react2.default.createElement(Separator, null),
        _react2.default.createElement(
          'a',
          { href: '#', onClick: this.setFilterAssigned },
          'Assigned Issues'
        )
      );
    }
  }]);

  return IssueFilter;
}(_react2.default.Component);

exports.default = IssueFilter;


IssueFilter.propTypes = {
  setFilter: _react2.default.PropTypes.func.isRequired
};

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      null,
      _react2.default.createElement(
        'center',
        null,
        _react2.default.createElement(
          'div',
          { id: 'buttons' },
          _react2.default.createElement(
            'button',
            _defineProperty({ id: 'signupButton', className: 'btn btn-dark', onClick: this.switch.bind(null, "signup") }, 'className', this.state.signup),
            'Sign Up'
          ),
          _react2.default.createElement(
            'button',
            _defineProperty({ id: 'loginButton', className: 'btn btn-dark', onClick: this.switch.bind(null, "login") }, 'className', this.state.login),
            'Login'
          )
        ),
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

    return _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this));
  }

  _createClass(Signup, [{
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
              { 'for': 'inputName' },
              'Name'
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('input', { type: 'name', className: 'form-control', id: 'inputName', placeholder: ' First Name' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('input', { type: 'name', className: 'form-control', id: 'inputName', placeholder: ' Last Name' })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { 'for': 'inputEmail' },
              'Email'
            ),
            _react2.default.createElement('input', { type: 'email', className: 'form-control', id: 'inputEmail', placeholder: 'Email' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { 'for': 'inputEmail' },
              'School'
            ),
            _react2.default.createElement('input', { type: 'school', className: 'form-control', id: 'inputschool', placeholder: 'School' })
          ),
          _react2.default.createElement(
            'div',
            { 'class': 'form-group' },
            _react2.default.createElement(
              'label',
              { 'for': 'exampleFormControlSelect1' },
              'What Type of Student Are You'
            ),
            _react2.default.createElement(
              'select',
              { 'class': 'form-control', id: 'exampleFormControlSelect1' },
              _react2.default.createElement(
                'option',
                null,
                'International'
              ),
              _react2.default.createElement(
                'option',
                null,
                'United States'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { 'for': 'inputEmail' },
              'Country'
            ),
            _react2.default.createElement('input', { type: 'country', className: 'form-control', id: 'inputcountry', placeholder: 'Country' })
          ),
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
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { 'for': 'inputPassword' },
              'Confirm Password'
            ),
            _react2.default.createElement('input', { type: 'password', className: 'form-control', id: 'inputPassword', placeholder: ' Password' })
          ),
          _react2.default.createElement(
            'a',
            { className: 'btn btn-dark', role: 'button' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/home', style: { textDecoration: 'none', color: 'white' } },
              'Sign Up'
            )
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
          _react2.default.createElement(
            'a',
            { className: 'btn btn-dark', role: 'button' },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/home', style: { textDecoration: 'none', color: 'white' } },
              'Login'
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(86);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(19);

var _Dissusion = __webpack_require__(240);

var _Dissusion2 = _interopRequireDefault(_Dissusion);

var _IssueEdit = __webpack_require__(242);

var _IssueEdit2 = _interopRequireDefault(_IssueEdit);

var _Dashboard = __webpack_require__(243);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Welcome = __webpack_require__(123);

var _Welcome2 = _interopRequireDefault(_Welcome);

var _SearchBar = __webpack_require__(79);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _Profile = __webpack_require__(78);

var _Profile2 = _interopRequireDefault(_Profile);

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
      _react2.default.createElement(_reactRouter.Route, { path: '/discussion', component: _Dissusion2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/profile', component: _Profile2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '*', component: NoMatch })
    )
  );
};

// This renders the JSX router inside the content node:
_reactDom2.default.render(_react2.default.createElement(RoutedApp, null), contentNode);

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

__webpack_require__(48);

var _reactRouter = __webpack_require__(19);

var _Profile = __webpack_require__(78);

var _Profile2 = _interopRequireDefault(_Profile);

var _IssueFilter = __webpack_require__(122);

var _IssueFilter2 = _interopRequireDefault(_IssueFilter);

var _SearchBar = __webpack_require__(79);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dissusion = function (_React$Component) {
  _inherits(Dissusion, _React$Component);

  function Dissusion() {
    _classCallCheck(this, Dissusion);

    return _possibleConstructorReturn(this, (Dissusion.__proto__ || Object.getPrototypeOf(Dissusion)).call(this));
  }

  _createClass(Dissusion, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SearchBar2.default, null),
        _react2.default.createElement(
          'h1',
          null,
          'Discussion App'
        )
      );
    }
  }]);

  return Dissusion;
}(_react2.default.Component);

exports.default = Dissusion;

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

var _reactRouter = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IssueEdit = function (_React$Component) {
  _inherits(IssueEdit, _React$Component);

  function IssueEdit() {
    _classCallCheck(this, IssueEdit);

    return _possibleConstructorReturn(this, (IssueEdit.__proto__ || Object.getPrototypeOf(IssueEdit)).apply(this, arguments));
  }

  _createClass(IssueEdit, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          'This is a placeholder for editing issue ',
          this.props.params.id,
          '.'
        ),
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/issues' },
          'Back to issue list'
        )
      );
    }
  }]);

  return IssueEdit;
}(_react2.default.Component);

exports.default = IssueEdit;


IssueEdit.propTypes = {
  params: _react2.default.PropTypes.object.isRequired
};

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

var _reactRouter = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Issue Tracker Dashboard'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/issues' },
              'Login'
            )
          )
        )
      );
    }
  }]);

  return Dashboard;
}(_react2.default.Component);

exports.default = Dashboard;

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(48);

var _reactRouter = __webpack_require__(19);

var _SearchBar = __webpack_require__(79);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // NEW: added the import for react.


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
        _react2.default.createElement(_SearchBar2.default, null),
        _react2.default.createElement(
          'h1',
          null,
          'Profile'
        )
      );
    }
  }]);

  return Profile;
}(_react2.default.Component);

exports.default = Profile;

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

__webpack_require__(48);

var _reactRouter = __webpack_require__(19);

var _Profile = __webpack_require__(78);

var _Profile2 = _interopRequireDefault(_Profile);

var _IssueFilter = __webpack_require__(122);

var _IssueFilter2 = _interopRequireDefault(_IssueFilter);

var _Welcome = __webpack_require__(123);

var _Welcome2 = _interopRequireDefault(_Welcome);

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
              'About'
            ),
            _react2.default.createElement(
              'a',
              { className: 'btn btn-dark', role: 'button' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/discussion', style: { textDecoration: 'none', color: 'white' } },
                'Community Dissusion'
              )
            ),
            _react2.default.createElement(
              'a',
              { className: 'btn btn-dark', href: '/view04.html', role: 'button' },
              'Connect With Students'
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
        _react2.default.createElement('br', null)
      );
    }
  }]);

  return SearchBar;
}(_react2.default.Component);

exports.default = SearchBar;

/***/ })

},[124]);
//# sourceMappingURL=app.bundle.js.map