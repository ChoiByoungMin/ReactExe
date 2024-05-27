import FancyBorder from "./FancyBorder";

export default function WelcomeDesc(props){
    return (
        <FancyBorder color="red">
            {/* 아래 부분이 FancyBorder의 children으로 구성된다. */}
            <h1 className="Desc-title">
                어서오세요
            </h1>
            <p>
                <img src="https://cdn.skkuw.com/news/photo/202304/24774_13561_1347.jpg" alt="블루베리" />
            </p>
            <p className="Desc-summing">
                북아메리카를 비롯한 북반구 전역에 분포하는 식물 및 열매. 이름과 달리 딸기, 라즈베리, 블랙베리 등의 베리류와는 전혀 관계가 없는 진달래과 식물[1]이다. 꽃말은 현명과 친절이다.
            </p>
            <p className="Desc-description">
            넓게는 산앵도나무속(Vaccinium spp.)에 속한 여러 종들 중 검푸른 열매를 맺는 대부분의 식물들을 뭉뚱그려 블루베리라고 부르며, 동아시아가 원산지인 들쭉나무와 정금나무 및 지포나무, 유럽의 빌베리(bilberry)도 블루베리의 일종으로 간주된다. 물론 산앵도나무나 크랜베리(넌출월귤), 월귤(링곤베리)처럼 열매가 빨간 종들은 당연히 제외된다.
            </p>
        </FancyBorder>
    )
}