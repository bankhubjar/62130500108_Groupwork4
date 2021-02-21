const app = {
    data() {
        return {
            pics: [
                { src: "./images/chill.jpg", text: "Good View Residence", like: false, },
                { src: "./images/cool.jpg", text: "Kamp Residence", like: false, },
                { src: "./images/island.jpg", text: "Ban Kang Mung", like: false, },
                { src: "./images/mounten.jpg", text: "Ban Health Village", like: false, }
            ],
            search: {
                searchOn: true,
                searchBar: false,
            },
            searchtext: '',
            haveResult: false,
            havetext: false,
            picsearch: null,
            showpic: true ,
            viewpic: {
                showviewpic: false,
                src: '',
                text: '',
                like: false,
                tempindex: null
            }
        }
    },
    methods: {
        togglelike(text) {
            const index = this.pics.findIndex(pic => pic.text == text);
            this.pics[index].like = !this.pics[index].like
            this.viewpic.like = !this.viewpic.like
        },
        togglesearchon() {
            this.search.searchOn = !this.search.searchOn
            this.search.searchBar = !this.search.searchBar
        },
        togglesearchoff() {
            this.togglesearchon();
            this.searchtext = ''
        },
        toggleview(text) {
            const index = this.pics.findIndex(pic => pic.text == text);
            this.viewpic.src = this.pics[index].src
            this.viewpic.text = this.pics[index].text
            this.viewpic.like = this.pics[index].like
            this.viewpic.showviewpic = !this.viewpic.showviewpic
            this.viewpic.tempindex = index
        },
        toggleviewoff() {
            this.viewpic.showviewpic = !this.viewpic.showviewpic
        },
        nextview() {
            if(this.viewpic.tempindex>=this.pics.length){
                this.viewpic.tempindex = 0
            }
            const index = this.viewpic.tempindex++
            this.viewpic.src = this.pics[index].src
            this.viewpic.text = this.pics[index].text
            this.viewpic.like = this.pics[index].like 
        },
        beforeview() {
            if(this.viewpic.tempindex<=0){
                this.viewpic.tempindex = this.pics.length-1
            }
            const index = this.viewpic.tempindex--
            this.viewpic.src = this.pics[index].src
            this.viewpic.text = this.pics[index].text
            this.viewpic.like = this.pics[index].like 
        }
    },
    computed: {
        countpic() {
            return this.pics.length
        },
        countlike() {
            return this.pics.filter(t => t.like).length
        },
        filterpic() {
            this.picsearch = this.pics.filter(pic => pic.text.toLowerCase().search(this.searchtext.toLowerCase()) > -1)
            this.searchtext != '' ? this.havetext = true : this.havetext = false
            return this.searchtext
        },
        Getpic() {
            this.haveResult = !this.picsearch.length
            return this.picsearch ? this.picsearch : this.pics;
        },
    }
}

Vue.createApp(app).mount('#app')