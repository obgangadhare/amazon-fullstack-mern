const User = require('../Model/user');
exports.signup = (req, res) => {
    const { email, password, name } = req.body;

    const user = new User({ email, password, name });

    user.save()
        .then(response => {
            res.status(200).json({
                message: 'User registered successfully',
                user: response
            });
        })
        .catch(error => {
            res.status(500).json({
                message: 'Error registering user',
                error
            });
        });
};
exports.login = (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(400).json({ message: 'Invalid email or password' });
            }

            
            if (user.password !== password) {
                return res.status(400).json({ message: 'Invalid email or password' });
            }

            res.status(200).json({ message: 'Login successful', user });
        })
        .catch(error => {
            res.status(500).json({ message: 'Error logging in', error });
        });
};
