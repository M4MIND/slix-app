let readdirp = require('readdirp');
let child = require('child_process');
let path = require('path');

let settings = {
	root: 'src/',
	fileFilter: '*.js'
};

let allFilePaths = [];

// Iterate recursively through a folder
readdirp.promise(settings.root, settings).then(result => {
	console.log('Generate d.ts files')
	for (let file of result) {
		file.path = path.join('src', file.path).replace(new RegExp("\\\\", 'g'), '/');

		let cmd = "dtsmake -s " + file.path + " -N -n 'slix'";

		child.exec(cmd, (e, s, se) => {
			if (e || se) {
				if (e) {
					console.log(e.message);
				}
				if (se) {
					console.log(se.toString());
				}
			} else {
				console.log("[dtsmake extest] " + file.basename.replace('.js', '.d.ts') + " file output complete.");
				let copy = 'cp ' + file.path.replace('.js', '.d.ts');
				copy += " " + file.path.replace('src', 'dist').replace('.js', '.d.ts');

				child.exec(copy, (e, s, se) => {
						if (e || se) {
							if (e) {
								console.log(e.message);
							}
							if (se) {
								console.log(se.toString());
							}
						} else {
							let rm = "rm " + file.path.replace('.js', '.d.ts');

							child.exec(rm, (e, s, se) => {
									if (e || se) {
										if (e) {
											console.log(e.message);
										}
										if (se) {
											console.log(se.toString());
										}
									}
									else {
										console.log('------> remove file: ', file.path.replace('.js', '.d.ts'))
									}
								}
							)
						}
					}
				);
			}
		})
	}
});



