
const style = {
  wrapper: `m-min flex`
}

function SidebarOption({ text, Icon, isActive, setSlected, redirect }) {
  return (
    <div
      className={style.wrapper}
      onClick={() => {
        setSlected(text)
      }}
    >
      <div className={style.iconContainer}>
        <Icon />
      </div>
      <div className={`${isActive ? style.textActive : style.Line}`}
      >
        {text}
      </div>
    </div>
  )
}

export default SidebarOption