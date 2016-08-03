//Яркий пример внедрения зависимости
module.exports = function(pool) {
	var context = {
		SaveArticle: function(key, callback) {
			pool.query('INSERT INTO Articles SET ?', key, callback);
		},
    SelectAll: (callback)  => { pool.query('Select * from Articles', callback); }
	};

	return context;
};
