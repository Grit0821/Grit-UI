// import icons 目录下的所有 svg 文件
let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('./icons/', true, /\.svg$/))
} catch (error) {
  console.log(error)
}