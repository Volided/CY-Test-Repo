describe('Auth', () => {
    let sid;
    before(() => {

        const userCreds = {
            email: 'volided123@gmail.com',
            password: 'Qwerty12',
            remember: true
        }
        cy.api('POST', 'https://qauto.forstudy.space/api/auth/signin', userCreds).then((response) => {
            const headers = response.headers;
            const cookie = headers['set-cookie'][1];
            const cookieArray = cookie.split('\n');
            for (const cookie of cookieArray) {
                if (cookie.trim().startsWith('sid=')) {
                    sid = (cookie.trim().split('=')[1]).split(';')[0];
                    break;
                }
            }
        })
    })

    it.only('Get cars', () => {
        cy.api({
            method: 'GET',
            url: 'https://qauto.forstudy.space/api/cars',
            headers: {
                Cookie: `sid=${sid}`,
            },
        }).then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.equal(200);
        });
    })

    it.only('post cars', () => {
        cy.api({
            method: 'POST',
            url: 'https://qauto.forstudy.space/api/cars',
            headers: {
                Cookie: `sid=${sid}`,
            },
            body: {
                
                "carBrandId": 1,
                "carModelId": 1,
                "mileage": 122
            }

        }).then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.equal(201);
            
            
        });
    })

    it.only('delete cars', () => {
        const id = 201067;
        cy.api({
            method: 'DELETE',
            url: `https://qauto.forstudy.space/api/cars/${id}`,
            headers: {
                Cookie: `sid=${sid}`,
            },
            

        }).then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.equal(200);
            
            
        });
    })


})
