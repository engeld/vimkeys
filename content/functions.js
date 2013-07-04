function vimkeysScrollByLines(n) {
	if (n < 0) {
		n = 0-n
		for (var i = 0; i < n; i++) {
			goDoCommand('cmd_scrollLineUp')
		}
	}
	else {
		for (var i = 0; i < n; i++) {
			goDoCommand('cmd_scrollLineDown')
		}
	}

}

