/* If you like a banner on a NationStates nation's
 * main page, and it is currently being displayed,
 * run this to open the image in a new tab for
 * downloading.
 */
window.open(((function(){
	let st = document.getElementById("nationcover").style.backgroundImage;
	let out = st.substring(5, (st.length - 2));
	return (out);
})()), "_blank");