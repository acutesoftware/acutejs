// --------------------------------
//  Define Data Sources
// --------------------------------

let getPostsList = async () => {
     const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`/posts`, options)
        const json = await response.json();
        await Utils.sleep(1000)
    
        return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
}

let Home = {
    render : async () => {
        let posts = await getPostsList()
        let view =  /*html*/`
            <section class="section">
                <h1> Home </h1>
                <ul>
                    ${ posts.map(post => 
                        /*html*/`<li><a href="#/p/${post.id}">${post.title}</a></li>`
                        ).join('\n ')
                    }
                </ul>
            </section>
        `
        return view
    }
    , after_render: async () => {
    }

}

export default Home;