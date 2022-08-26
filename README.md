# baekjoon-algorithm-study

_with CodeStates 40th 스터디 카페_

<br/>

> 이 저장소는 알고리즘 소모임 3조의 `백준 알고리즘 스터디`를 위한 공간입니다.<br/>

<br/>

## ✅ 스터디 진행 방향

---

- 매주 금요일 자정까지 정해진 분량의 알고리즘을 풀고 PR(Pull Request)을 남깁니다.
  - 매주 월요일 가이드 일정 후 merge 하겠습니다.
- 스터디는
  - 본 저장소(스터디 repository. 이하 <u>**중앙 저장소**</u>)와
  - 각 개인의 계정으로 fork한 원격 저장소(<u>**본인의 원격 저장소**</u>),
  - <u>**로컬 저장소**</u>에서 진행됩니다.
- 모든 코드 기여자는 각 개인의 **로컬 저장소**에서 개발한 내용을 **본인의 원격 저장소**로 push하고 이 내용을 **중앙 저장소**에 PR합니다.
- 다른 스터디원의 PR 내용을 보고 자유롭게 comment(코드 리뷰)를 남겨주세요!😃

<br/>

## ✅ 참여 방법

---

1. 중앙 저장소를 나의 깃허브 계정에 fork 한다.
2. 로컬 저장소에 본인의 원격 저장소를 clone 한다. (push 용)

   ```bash
   $ git clone 본인의 원격 저장소 URL
   ```

3. PR이 반영되어 변경된 중앙 저장소의 내용을 각 개인의 로컬 저장소에 받아 올 수 있어야 하므로 중앙 저장소도 로컬에 연결한다.

   - `2.`에서 clone한 본인의 원격 저장소에는 자동으로 `origin`이라는 이름이 부여되었습니다.
   - 중앙원격저장소를 `upstream`이란 이름으로 추가합니다.

     ```bash
     $ git remote add upstream https://github.com/seb-fe-40-algorithm-3/baekjoon-algorithm-study.git

     ## git 리모트 url 보기
     $ git remote -v
     ```
