<template>
    <div class="motive">
        <h3>강원 지역의 학생과 개발자들은<br/>
            개발 컨퍼런스에 참석하기 위해<br/>
            항상 수도권으로 이동해야 했습니다.</h3>
        <span>우리는 그러한 낮은 접근성을 해소하고 강원 지역 개발자의 네트워킹 기회를 마련하고자<br/>
            GWDC24를 기획했습니다.</span>
        <span>GWDC24는 강원 지역 기반 개발 커뮤니티 Dev.KNU를 중심으로 이뤄지는 비영리 개발자 컨퍼런스로, 강원 지역 개발 커뮤니티의 확대와 네트워크 구축을 위해 진행하는 행사입니다.</span>
        <span>GWDC24를 통해 구축된 네트워크를 통해 강원 지역 개발자들은 다양한 지역과 배경을 가진 개발자들과의 교류를 통해 전문적인 성장을 이룰 수 있으며, 협업의 기회를 확대할 수 있을 것입니다.</span>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/color';
@import "pretendard/dist/web/static/pretendard.css";

div.motive {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 340px;

    h3 {
        color: $color-text-100;
        font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: -0.36px;
    }

    span {
        color: $color-text-200;
        font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 142.857% */
        //letter-spacing: -0.28px;
    }
}
</style>