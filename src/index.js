module.exports = function solveSudoku(matrix) {
	var i
	var	j
	var a
	var	b
	var	s
	var	s1
	var	q
	var	w
	var	s2
	var	gorstack = []
	var	vertstack = []
	var stack3x3 = []
	var s3 
	for( i = 0; i < 9; i++){
		for ( j = 0; j < 9; j++){
			if ( matrix[i][j] === 0 ){
				if ( gorstack.length >= 9 ) {
					gorstack = []
				}
				if ( vertstack.length >= 9 ) {
					vertstack = []
				}
				if ( stack3x3.length >= 9 ) {
					stack3x3 = []
				}
				for( a = 0; a < 9; a++ ){
					gorstack.push(matrix[a][j]);
				}
				for ( b = 0; b < 9; b++ ){
					vertstack.push(matrix[i][b]);
				}
				for ( s = 1; s <= 9; s++ ){
					s1 = gorstack.indexOf(s);
					if ( s1 === -1 ){
						s2 = vertstack.indexOf(s);
						if ( s2 === -1 ){
							var si1;
							var sj1;
							si1 = i;
							sj1 = j;
							if ( 0 <= si1 && si1 < 3 ){
									if ( 0 <= sj1 && sj1 < 3){
										for (let i = 0; i < 3; i++ ){
											for (let j = 0; j < 3; j++ ){
												stack3x3.push(matrix[i][j])
											}
										}	
										s3 = stack3x3.indexOf(s)
										if ( s3 === -1 ){
											
											matrix[i][j] = s;
											
										}
									}
									if ( 3 <= sj1 && sj1 < 6){
										for (let i = 0; i < 3; i++ ){
											for (let j = 3; j < 6; j++ ){
												stack3x3.push(matrix[i][j])
											}
										}	
										s3 = stack3x3.indexOf(s)
										if ( s3 === -1 ){
											matrix[i][j] = s;
											
										}
									}
									if ( 6 <= sj1 && sj1 < 9){
										for (let i = 0; i < 3; i++ ){
											for (let j = 6; j < 9; j++ ){
												stack3x3.push(matrix[i][j])
											}
										}	
										s3 = stack3x3.indexOf(s)
										if ( s3 === -1 ){
											matrix[i][j] = s;
											
										}
									}
							}
							 			
							if ( 3 <= si1 && si1 < 6 ){
									if ( 0 <= sj1 && sj1 < 3){
										for (let i = 3; i < 6; i++ ){
											for (let j = 0; j < 3; j++ ){
												stack3x3.push(matrix[i][j])
											}
										}	
										s3 = stack3x3.indexOf(s)
										if ( s3 === -1 ){
											matrix[i][j] = s;
											
										}
									}
									if ( 3 <= sj1 && sj1 < 6){
										for (let i = 3; i < 6; i++ ){
											for (let j = 3; j < 6; j++ ){
												stack3x3.push(matrix[i][j])
											}
										}	
										s3 = stack3x3.indexOf(s)
										if ( s3 === -1 ){
											matrix[i][j] = s;
											
										}
									}
									if ( 6 <= sj1 && sj1 < 9){
										for (let i = 3; i < 6; i++ ){
											for (let j = 6; j < 9; j++ ){
												stack3x3.push(matrix[i][j])
											}
										}	
										s3 = stack3x3.indexOf(s)
										if ( s3 === -1 ){
											matrix[i][j] = s;
										}
									}
							}
							
							if ( 6 <= si1 && si1 < 9 ){
									if ( 0 <= sj1 && sj1 < 3){
										for (let i = 6; i < 9; i++ ){
											for (let j = 0; j < 3; j++ ){
												stack3x3.push(matrix[i][j])
											}
										}	
										s3 = stack3x3.indexOf(s)
										if ( s3 === -1 ){
											matrix[i][j] = s;
										}
									}
									if ( 3 <= sj1 && sj1 < 6){
										for (let i = 6; i < 9; i++ ){
											for (let j = 3; j < 6; j++ ){
												stack3x3.push(matrix[i][j])
											}
										}	
										s3 = stack3x3.indexOf(s)
										if ( s3 === -1 ){
											matrix[i][j] = s;
										}
									}
									if ( 6 <= sj1 && sj1 < 9){
										for (let i = 6; i < 9; i++ ){
											for (let j = 6; j < 9; j++ ){
												stack3x3.push(matrix[i][j])
											}
										}	
										s3 = stack3x3.indexOf(s)
										if ( s3 === -1 ){
											matrix[i][j] = s;
										}
									}															
							}
							
						}
						
					}
				}	
				
			}
		}
		if ( j === 8 && i === 8 ){
			for( i = 0; i < 9; i++){
				for ( j = 0; j < 9; j++){
					if ( matrix[i][j] === 0 ){
						i = 0;
						j = 0;
						l = 1
						break
						
					}
				}
				if( l === 1){
					break
				}
			}
		}
	}
	return matrix ;
}