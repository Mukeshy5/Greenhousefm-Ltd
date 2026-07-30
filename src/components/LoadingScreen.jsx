const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.16),_transparent_55%),#f8fff9] px-6">
      <div className="w-full max-w-sm rounded-[2rem] border border-emerald-100 bg-white/90 p-8 text-center shadow-[0_20px_80px_rgba(15,23,42,0.12)] backdrop-blur">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-700 text-2xl font-bold text-white shadow-lg">
          G
        </div>
        <h2 className="mt-6 text-2xl font-bold text-gray-900">Greenhousefm Ltd</h2>
        <p className="mt-2 text-sm text-gray-600">Preparing your page…</p>

        <div className="mt-6 h-2 overflow-hidden rounded-full bg-emerald-100">
          <div className="h-full w-1/2 animate-[loadingBar_1.2s_ease-in-out_infinite] rounded-full bg-emerald-600" />
        </div>

        <div className="mt-5 flex justify-center gap-2">
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-emerald-500 [animation-delay:0ms]" />
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-emerald-500 [animation-delay:160ms]" />
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-emerald-500 [animation-delay:320ms]" />
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
