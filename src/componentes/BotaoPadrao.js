
export default function BotaoPadrao({children,margemTop}) {
  return (
    <button>
        {children}
        <style jsx>{`
                button {
                    font-style: normal;
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 22px;
                    padding: 14px 55px;
                    margin-top: ${margemTop}px;
                    width: 330px;
                    
                    text-align: center;
                    
                    color: #E5E5E5;
                    background: #014561;
                    border-radius: 2px;  
                }   
            `}
            </style>
    </button>
  )
}