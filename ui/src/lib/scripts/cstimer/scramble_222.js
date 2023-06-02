import { mathlib } from "./mathlib";
import { scrMgr } from "./scramble";

export var scramble_222 = (function(rn) {
	var solv = new mathlib.Solver(3, 3, [[0, [doPermMove, 'p', 7], 5040], [0, [doOriMove, 'o', 7, -3], 729]]);

	var movePieces = [
		[0, 2, 3, 1],
		[0, 1, 5, 4],
		[0, 4, 6, 2]
	];

	var moveOris = [
		null,
		[0, 1, 0, 1, 3],
		[1, 0, 1, 0, 3]
	];

	var oriCoord = new mathlib.coord('o', 7, -3);

	function doPermMove(arr, m) {
		mathlib.acycle(arr, movePieces[m]);
	}

	function doOriMove(arr, m) {
		mathlib.acycle(arr, movePieces[m], 1, moveOris[m]);
	}

	var cFacelet = [
		[3, 4, 9],
		[1, 20, 5],
		[2, 8, 17],
		[0, 16, 21],
		[13, 11, 6],
		[15, 7, 22],
		[12, 19, 10]
	];

	function checkNoBar(pidx, oidx) {
		var perm = mathlib.set8Perm([], pidx, 7);
		var ori = oriCoord.set([], oidx);
		var f = [];
		for (var i = 0; i < 24; i++) {
			f[i] = i >> 2;
		}
		mathlib.fillFacelet(cFacelet, f, perm, ori, 4);
		for (var i = 0; i < 24; i += 4) {
			if ((1 << f[i] | 1 << f[i + 3]) & (1 << f[i + 1] | 1 << f[i + 2])) {
				return false;
			}
		}
		return true;
	}

	function getScramble(type, length, state) {
		var ori, perm, lim;
		var maxl = type == '222o' ? 0 : 9;
		do {
			lim = 2;
			if (type == '222o' || type == '222so') {
				perm = rn(5040);
				ori = rn(729);
				lim = 3;
			} else if (type == '222eg') {
				ori = egmap[state & 0x7];
				perm = [0, 2, 3, 4, 5, 1][state >> 3];
				var arr = mathlib.set8Perm([0, 0, 0, 0].concat(egperms[perm]), rn(24), 4);
				perm = mathlib.get8Perm(arr, 7);
				var rndU = rn(4);
				ori = oriCoord.set([], ori);
				while (rndU-- > 0) {
					doOriMove(ori, 0);
				}
				ori = oriCoord.get(ori);
			} else if (/^222eg[012]$/.exec(type)) {
				return getScramble('222eg', length, [0, 8, 40][~~type[5]] + state);
			} else if (type == '222nb') {
				do {
					perm = rn(5040);
					ori = rn(729);
				} while (!checkNoBar(perm, ori));
			}
		} while (perm == 0 && ori == 0 || solv.search([perm, ori], 0, lim) != null);
		return solv.toStr(solv.search([perm, ori], maxl).reverse(), "URF", "'2 ");
	}

	scrMgr.reg(['222o', '222so', '222nb'], getScramble);
})(mathlib.rn);