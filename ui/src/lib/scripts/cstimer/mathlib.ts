var fact = [1];
for (var i = 0; i < 32; ++i) {
    fact[i + 1] = fact[i] * (i + 1);
}

function circle(arr: any[], ...indices: number[]) {
    const length = indices.length - 1;
    const temp = arr[indices[length]];

    for (let i = length; i > 0; i--) {
        arr[indices[i]] = arr[indices[i - 1]];
    }

    arr[indices[0]] = temp;

    return circle;
}

//perm: [idx1, idx2, ..., idxn]
//pow: 1, 2, 3, ...
//ori: ori1, ori2, ..., orin, base
// arr[perm[idx2]] = arr[perm[idx1]] + ori[idx2] - ori[idx1] + base
function acycle(arr, perm, pow, ori) {
    pow = pow || 1;
    var plen = perm.length;
    var tmp: number[] = [];
    for (var i = 0; i < plen; i++) {
        tmp[i] = arr[perm[i]];
    }
    for (var i = 0; i < plen; i++) {
        var j = (i + pow) % plen;
        arr[perm[j]] = tmp[i];
        if (ori) {
            arr[perm[j]] += ori[j] - ori[i] + ori[ori.length - 1];
        }
    }
    return acycle;
}

function getPruning(table, index) {
    return table[index >> 3] >> ((index & 7) << 2) & 15;
}

function setNPerm(arr, idx, n) {
    var i, j;
    arr[n - 1] = 0;
    for (i = n - 2; i >= 0; --i) {
        arr[i] = idx % (n - i);
        idx = ~~(idx / (n - i));
        for (j = i + 1; j < n; ++j) {
            arr[j] >= arr[i] && ++arr[j];
        }
    }
}

function getNPerm(arr, n) {
    var i, idx, j;
    idx = 0;
    for (i = 0; i < n; ++i) {
        idx *= n - i;
        for (j = i + 1; j < n; ++j) {
            arr[j] < arr[i] && ++idx;
        }
    }
    return idx;
}

function getNParity(idx, n) {
    var i, p;
    p = 0;
    for (i = n - 2; i >= 0; --i) {
        p ^= idx % (n - i);
        idx = ~~(idx / (n - i));
    }
    return p & 1;
}

function get8Perm(arr, n?: any, even?: any) {
    n = n || 8;
    var idx = 0;
    var val = 0x76543210;
    for (var i = 0; i < n - 1; ++i) {
        var v = arr[i] << 2;
        idx = (n - i) * idx + (val >> v & 7);
        val -= 0x11111110 << v;
    }
    return even < 0 ? (idx >> 1) : idx;
}

function set8Perm(arr, idx, n?: any, even?: any) {
    n = (n || 8) - 1;
    var val = 0x76543210;
    var prt = 0;
    if (even < 0) {
        idx <<= 1;
    }
    for (var i = 0; i < n; ++i) {
        var p = fact[n - i];
        var v = ~~(idx / p);
        prt ^= v;
        idx %= p;
        v <<= 2;
        arr[i] = val >> v & 7;
        var m = (1 << v) - 1;
        val = (val & m) + (val >> 4 & ~m);
    }
    if (even < 0 && (prt & 1) != 0) {
        arr[n] = arr[n - 1];
        arr[n - 1] = val & 7;
    } else {
        arr[n] = val & 7;
    }
    return arr;
}

function getNOri(arr, n, evenbase) {
    var base = Math.abs(evenbase);
    var idx = evenbase < 0 ? 0 : arr[0] % base;
    for (var i = n - 1; i > 0; i--) {
        idx = idx * base + arr[i] % base;
    }
    return idx;
}

function setNOri(arr, idx, n, evenbase) {
    var base = Math.abs(evenbase);
    var parity = base * n;
    for (var i = 1; i < n; i++) {
        arr[i] = idx % base;
        parity -= arr[i];
        idx = ~~(idx / base);
    }
    arr[0] = (evenbase < 0 ? parity : idx) % base;
    return arr;
}

// type: 'p', 'o'
// evenbase: base for ori, sign for even parity
function coord(type, length, evenbase) {
    this.length = length;
    this.evenbase = evenbase;
    this.get = type == 'p' ?
        function (arr) {
            return get8Perm(arr, this.length, this.evenbase);
        } : function (arr) {
            return getNOri(arr, this.length, this.evenbase);
        };
    this.set = type == 'p' ?
        function (arr, idx) {
            return set8Perm(arr, idx, this.length, this.evenbase);
        } : function (arr, idx) {
            return setNOri(arr, idx, this.length, this.evenbase);
        };
}

function createMove(moveTable, size, doMove, N_MOVES) {
    N_MOVES = N_MOVES || 6;
    if (Array.isArray(doMove)) {
        var cord = new coord(doMove[1], doMove[2], doMove[3]);
        doMove = doMove[0];
        for (var j = 0; j < N_MOVES; j++) {
            moveTable[j] = [];
            for (var i = 0; i < size; i++) {
                var arr = cord.set([], i);
                doMove(arr, j);
                moveTable[j][i] = cord.get(arr);
            }
        }
    } else {
        for (var j = 0; j < N_MOVES; j++) {
            moveTable[j] = [];
            for (var i = 0; i < size; i++) {
                moveTable[j][i] = doMove(i, j);
            }
        }
    }
}

function createPrun(prun, init, size, maxd, doMove, N_MOVES, N_POWER, N_INV) {
    var isMoveTable = Array.isArray(doMove);
    N_MOVES = N_MOVES || 6;
    N_POWER = N_POWER || 3;
    N_INV = N_INV || 256;
    maxd = maxd || 256;
    for (var i = 0, len = (size + 7) >>> 3; i < len; i++) {
        prun[i] = -1;
    }
    prun[init >> 3] ^= 15 << ((init & 7) << 2);
    var val = 0;
    for (var l = 0; l <= maxd; l++) {
        var done = 0;
        var inv = l >= N_INV;
        var fill = (l + 1) ^ 15;
        var find = inv ? 0xf : l;
        var check = inv ? l : 0xf;

        out: for (var p = 0; p < size; p++, val >>= 4) {
            if ((p & 7) == 0) {
                val = prun[p >> 3];
                if (!inv && val == -1) {
                    p += 7;
                    continue;
                }
            }
            if ((val & 0xf) != find) {
                continue;
            }
            for (var m = 0; m < N_MOVES; m++) {
                var q = p;
                for (var c = 0; c < N_POWER; c++) {
                    q = isMoveTable ? doMove[m][q] : doMove(q, m);
                    if (getPruning(prun, q) != check) {
                        continue;
                    }
                    ++done;
                    if (inv) {
                        prun[p >> 3] ^= fill << ((p & 7) << 2);
                        continue out;
                    }
                    prun[q >> 3] ^= fill << ((q & 7) << 2);
                }
            }
        }
        if (done == 0) {
            break;
        }
    }
}

//state_params: [[init, doMove, size, [maxd], [N_INV]], [...]...]
function Solver(N_MOVES, N_POWER, state_params) {
    this.N_STATES = state_params.length;
    this.N_MOVES = N_MOVES;
    this.N_POWER = N_POWER;
    this.state_params = state_params;
    this.inited = false;
}

Solver.prototype.search = function (state, minl, MAXL) {
    MAXL = (MAXL || 99) + 1;
    this.init();
    this.sol = [];
    for (var maxl = minl; maxl < MAXL; maxl++) {
        if (this.idaSearch(state, maxl, -1)) {
            break;
        }
    }
    return maxl == MAXL ? null : this.sol.reverse();
};

// Convert internal representation to string
Solver.prototype.toStr = function (sol, move_map, power_map) {
    return sol.map(move => {
        return move_map[move[0]] + power_map[move[1]];
    }).join(' ').replace(/ +/g, ' ');
};

// Convert string to internal representation
Solver.prototype.fromStr = function (alg, move_map, power_map) {
    return alg.replace(/ +/g, ' ').trim().split(' ').map(move => {
        return [move_map.indexOf(move[0]), power_map.indexOf(move[1] || "")];
    });
};

Solver.prototype.findScrambleForAlg = function (alg, move_map, power_map) {
    alg = this.fromStr(alg, move_map, power_map);
    const state = this.performAlg(alg, move_map, power_map);

    // This ensures the scramble is "more complicated" than the alg.
    let minLength = alg.length + 1;
    let sol = this.search(state, minLength);
    let solStr = this.toStr(sol.reverse(), move_map, power_map);
    return solStr;
}

Solver.prototype.performAlg = function (alg, move_map, power_map) {
    this.init();
    let state = this.state_params.map(state_param => state_param[0]);
    for (let i = 0; i < alg.length; i++) {
        let move = alg[i][0];
        let power = alg[i][1];
        for (let _ = 0; _ < power_map.length - power; _++) {
            for (let j = 0; j < this.N_STATES; j++) {
                state[j] = this.move[j][move][state[j]];
            }
        }
    }
    return state;
};

Solver.prototype.idaSearch = function (state, maxl, lm) {
    var N_STATES = this.N_STATES;
    for (var i = 0; i < N_STATES; i++) {
        if (getPruning(this.prun[i], state[i]) > maxl) {
            return false;
        }
    }
    if (maxl == 0) {
        return true;
    }
    var offset = state[0] + maxl + lm + 1;
    for (var move0 = 0; move0 < this.N_MOVES; move0++) {
        var move = (move0 + offset) % this.N_MOVES;
        if (move == lm) {
            continue;
        }
        var cur_state = state.slice();
        for (var power = 0; power < this.N_POWER; power++) {
            for (var i = 0; i < N_STATES; i++) {
                cur_state[i] = this.move[i][move][cur_state[i]];
            }
            if (this.idaSearch(cur_state, maxl - 1, move)) {
                this.sol.push([move, power]);
                return true;
            }
        }
    }
    return false;
};

Solver.prototype.init = function () {
    if (!this.inited) {
        this.move = [];
        this.prun = [];
        for (var i = 0; i < this.N_STATES; i++) {
            var state_param = this.state_params[i];
            var init = state_param[0];
            var doMove = state_param[1];
            var size = state_param[2];
            var maxd = state_param[3];
            var N_INV = state_param[4];
            this.move[i] = [];
            this.prun[i] = [];
            createMove(this.move[i], size, doMove, this.N_MOVES);
            createPrun(this.prun[i], init, size, maxd, this.move[i], this.N_MOVES, this.N_POWER, N_INV);
        }
        this.inited = true;
    }
}

function rndEl(x) {
    return x[~~(Math.random() * x.length)];
}

function rn(n) {
    return ~~(Math.random() * n)
}

function rndProb(plist) {
    var cum = 0;
    var curIdx = 0;
    for (var i = 0; i < plist.length; i++) {
        if (plist[i] == 0) {
            continue;
        }
        if (Math.random() < plist[i] / (cum + plist[i])) {
            curIdx = i;
        }
        cum += plist[i];
    }
    return curIdx;
}

export var mathlib = {
    setNPerm: setNPerm,
    getNPerm: getNPerm,
    getNParity: getNParity,
    get8Perm: get8Perm,
    set8Perm: set8Perm,
    coord: coord,
    circle: circle,
    acycle: acycle,
    rn: rn,
    rndEl: rndEl,
    rndProb: rndProb,
    Solver: Solver,
};