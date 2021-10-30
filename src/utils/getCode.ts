const getCode = () => {
  /*
  const code_file: any = document.getElementsByClassName(
    'monaco-editor mac  vs'
  )
  console.info(code_file.dataset.url)*/
  return `
  <!DOCTYPE html>
<html>

<head>
	<title>Parcel Sandbox</title>
	<meta charset="UTF-8" />
</head>

<body>
	<div id="app"></div>

	<h1>Hello Vanilla!</h1>
  <div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
  </div>
	</script>
</body>

</html><!DOCTYPE html>
<html>

<head>
	<title>Parcel Sandbox</title>
	<meta charset="UTF-8" />
</head>

<body>
	<div id="app"></div>

	<script src="src/index.js">
	</script>
</body>

</html>`
}

export default getCode
