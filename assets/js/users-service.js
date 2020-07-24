
var uri = "localhost"
function users() {
  get = function () {
    return axios.get('http://' + uri + ':3000/produse');
  };

  get_profil = function (id) {
    return axios.post('http://' + uri + ':3000/profil', { id: id }).then(response => response);
  };

  getcos = function (id) {
    return axios.post('http://' + uri + ':3000/cosclientfinal', { id: id }).then(response => response);
  };



  //salvare lista in baza de date
  put = function (id, data, total, con) {
    return axios.put('http://' + uri + ':3000/cosclient', { id: id, cos: data, total: total, confirm: con }).then(response => response);
  };

  confirm_cos = function (id,con) {
    return axios.put('http://' + uri + ':3000/cosclient_confirm', { id: id,confirm: con }).then(response => response);
  };
  reg = function (data) { return axios.post('http://' + uri + ':3000/sign_up', { data:data}).then(response => response); };
  login = function (name, pass) { return axios.post('http://' + uri + ':3000/login', { name: name, pass: pass }).then(response => response); };
  logout = function () { return axios.post('http://' + uri + ':3000/logout').then(response => response); };

  return {
    get: get,
    put: put,
    get_profil:get_profil,
    reg: reg,
    login: login,
    logout: logout,
    getcos: getcos,
    confirm_cos:confirm_cos
  };
}
