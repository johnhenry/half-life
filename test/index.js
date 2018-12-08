const tape = require('tape');
const portionLeft = require("../dist/index.js");

tape("it should calculate portions left", ({
    equal,
    end
}) => {
    equal(portionLeft(2, 4), 0.25);
    end();
});
