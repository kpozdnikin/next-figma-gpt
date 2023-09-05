import Image from 'next/image'

export default function Home() {
  return (
    <div
      id="header"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "rgba(0.04313725605607033, 0.07450980693101883, 0.1568627506494522, 1)",
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 16,
        paddingBottom: 0,
        width: 1200,
        height: 73,
      }}
    >
      <div
        id="header-wrap"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0)",
          paddingBottom: 0,
          width: 1152,
          height: 41,
        }}
      >
        <div
          id="header-left"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            paddingBottom: 0,
            width: 641,
            height: 41,
          }}
        >
          <div
            id="menu"
            style={{
              display: 'flex',
              flexDirection: 'row',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              paddingBottom: 0,
              "width": 490,
              "height": 20
            }}
          >
            <span
              id="menu-label"
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'inherit',
                paddingBottom: 0,
                width: 47,
                height: 20,
              }}
            >Тексты</span>
            <span
              id="menu-label"
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'inherit',
                paddingBottom: 0,
                width: 59,
                height: 20,
              }}
            >Митапы</span>
          </div>
        </div>
        <div
          id="header-right"
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            paddingBottom: 0,
            width: 318,
            height: 20
          }}
        >

        </div>
      </div>
    </div>
  )
}
