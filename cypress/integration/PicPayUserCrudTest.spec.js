let token =             require('../fixtures/token');
let userTestData =      require('../fixtures/userTestData');
let alterUserTestData = require('../fixtures/alterUserTestData');
let numberOfPages;

const checkNumberOfPages = () => {
    cy.request({
        method: "GET",
        url: `/users`,
        auth:{"bearer": token}
    })
    .then((response) => {
        numberOfPages = response.body.meta.pagination.pages;
    });
};

const findUserInAllPages = (checkIfExist,page,mustExist) => {
    cy.request({
        method: "GET",
        url: `/users?page=${page}`,
        auth: {"bearer": token}
    })
    .then(response => {
        const found = checkIfExist(response);
        if(found || page === numberOfPages + 1){
            expect(found).to.equal(mustExist);
            return;
        }
        findUserInAllPages(checkIfExist, ++page, mustExist)
    })
};

describe('Save New User',() => {
    it('POST Save New User',() => {
        cy.request({
            method: "POST",
            url: "/users",
            auth: {"bearer": token},
            body: userTestData
        })
        .then((response) => {
            expect(response.status).equal(200);
            cy.log(JSON.stringify(response.body.data));
            userTestData = response.body.data;
        });
    });
    it('GET Find New User', () => {
        checkNumberOfPages();
        findUserInAllPages(response => {
            const statusOk = response.status ===200;
            return statusOk && response.body.data.some(user =>{return user.id === userTestData.id})
        },1,true);
    });
});