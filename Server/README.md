# Server Folder

Server & Docker & AWS & DB Team 폴더입니다.

<br>

## Folder 규칙

### 각 분야 별로 폴더 생성

-   AWS, DB, Docker 폴더를 생성하겠습니다.
-   각 분야 별 팀원들은 각 폴더의 README.md를 작성해주세요.

<br>

## Branch 규칙

-   각 팀원이 구현할 기능들로 Branch를 생성하도록 하겠습니다.
-   branch 명: 개발자풀네임\_기능 ex) s5kywa1k3r_frontdocker
-   pr 권한은 추후 수정 예정
-   master에 merge된 remote branch는 스스로 제거합니다.
-   해당 기능에 대해 추가로 개발할 것이 있다면 merge 된 branch를 사용하지 말고 새로 생성하여 사용합니다.

<br>

## Commit Message 규칙

### 형식

\<Type>(\<Relative Path>): \<Message> \
 ex) feat(/Docker/Dockerfile): superdocker를 위한 dockerfile 생성

### 1. Type

각 Commit Message에는 본 Commit에 대한 Type을 제시하여야 합니다.

-   feat: 새로운 기능에 대한 파일이나 디렉터리 추가
-   docs: 문서만 수정된 경우 (ex. Markdown 수정)
-   fix: 기존의 기능에 대한 버그 수정
-   refactor: 코드에 변경이 가해졌으나, 기능 추가나 버그 수정이 아닌 경우 (ex. 주석 추가, 변수명 변경)
-   test: 테스트를 추가하거나 작성된 테스트를 고치는 경우
-   add: 파일 혹은 디렉터리가 추가되었으나 feat에 해당하지 않는 경우
-   del: 파일 혹은 디렉터리가 제거되었으나 위의 type에 해당하지 않는 경우
-   etc: 타입 중 존재하지 않는 경우 (commit에 구체적인 설명 필요)

### 2. Relative Path

위의 Type에 대한 Commit이 발생한 파일 혹은 폴더의 상대 경로를 제시하여야 합니다.

-   제시하여야 하는 상대경로의 길이는 최대 3 입니다.
-   우리 프로젝트의 최상위 폴더는 Server입니다.
-   Server 폴더보다 상위의 폴더는 수정하지 않습니다.
-   ex) /Server/Docker/superdocker/Dockerfile이 add 되었을 경우
    -   feat(Docker/superdocker/Dockerfile): Dockerfile 추가

### 3. Message

Message는 Commit 한 이유에 대하여 간결하게 작성합니다.

-   명령조, 현재 시제로 작성합니다. "changed", "changes", "변경됨" 같이 작성하지 말 것. "change". "변경".
-   마지막에 마침표는 찍지 않습니다.

<br>

## 역할 별 바로가기

-   [Main Server](./Docker/superdocker/main_server/README.md)
