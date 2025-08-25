import React from 'react'

const Button = (props: React.PropsWithChildren) => {
  return (
    <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
              <div className="absolute inset-0 rounded-lg">
                <div className="rounded-lg border border-white/5 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="rounded-lg border absolute inset-0 border-white/20 [mask-image:linnear-gradient(to_top,black,tanspaent)]"></div>
                <div className="absolute rounded-lg inset-0 shadow-[0_0_10px_#rgb(140,96,255,.7)_inset]"></div>
              </div>
              <span>{props.children}</span>
    </button>
  )
}

export default Button
