//页码间数据获取
; + function(window) {
    Array.shuffle= function(arr) {
        if (arr.length > 1) {
            var x = 0,
            temp;
            for (var i = arr.length; i-- > 0;) {
                x =Math.floor(Math.random()*(arr.length-1))+1; 
                temp = arr[0];
                arr[0] = arr[x];
                arr[x] = temp;
            }
        }
    };
}(window);

; + (function() {
    var REG_JS = /<!--([\s\S]*?)-->/g,
        REG_EXP = /\$\{([^}]+?)\}/g;
    var FB = function() {
        this.body = ["var _='';"];
    };
    FB.prototype = {
        js: function(code) {
            code = code.trim().replace(/return\s*;/g, "return _;");
            var lastPartIndex = 0;
            var expContent = null;
            while (expContent = REG_EXP.exec(code)) {
                if (lastPartIndex < expContent.index) {
                    this.body.push("\n" + code.substring(lastPartIndex, expContent.index));
                }
                this.body.push("\n_+=(" + expContent[1] + ");");
                lastPartIndex = expContent.index + expContent[0].length;
            }
            if (lastPartIndex < code.length) {
                this.body.push("\n" + code.substr(lastPartIndex));
            }
        },
        html: function(html) {
            if (!(html = html.trim()).length) {
                return;
            }
            var lastPartIndex = 0;
            var expContent = null;
            while (expContent = REG_EXP.exec(html)) {
                if (lastPartIndex < expContent.index) {
                    this.text(html.substring(lastPartIndex, expContent.index));
                }
                this.body.push("\n_+=(" + expContent[1] + ");");
                lastPartIndex = expContent.index + expContent[0].length;
            }
            if (lastPartIndex < html.length) {
                this.text(html.substr(lastPartIndex));
            }
        },
        text: function(s) {
            if ((s = s.trim()).length > 0) {
                s = s.replace(/"/g, '\\"').replace(/\s+/g, " ");
                this.body.push("\n_+=\"" + s + "\";");
            }
        },
        build: function(args) {
            this.body.push("\n return _;");
            var funBody = this.body.join("");
            console.log(funBody);
            var f = args ? new Function(args, funBody) : new Function(funBody);
            return f;
        }
    };

    var yi = function(args) {
        var fun = this.templateFunction;
        if (fun) {
            this.innerHTML = fun.apply(this, Array.prototype.slice.call(arguments,1));
            return this;
        }
        var lastPos = 0;
        var jsContent;
        var fb = new FB();
        var template = this.innerHTML.trim();
        while (jsContent = REG_JS.exec(template)) {
            if (lastPos < jsContent.index) {
                fb.html(template.substring(lastPos, jsContent.index));
            }
            fb.js(jsContent[1]);
            lastPos = jsContent.index + jsContent[0].length;
        }
        if (lastPos < template.length) {
            fb.html(template.substr(lastPos));
        }
        this.templateFunction = fun = fb.build(args);
        this.innerHTML = fun.apply(this, Array.prototype.slice.call(arguments,1));
        return this;
    }
    //expose
    HTMLElement.prototype.yi = yi;
})();