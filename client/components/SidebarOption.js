
const style = {
  wrapper: `m-min flex`
}

function SidebarOption({ text, Icon, isActive, setSelected, redirect }) {
  return (
    <div
      className={style.wrapper}
      onClick={() => {
        setSelected(text)
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