import { AlbumSelectorComponent } from "./album-selector.component"

describe('AlbumSelectorComponent', () => {
    let fixture: AlbumSelectorComponent;

    beforeEach(() => {
        fixture = new AlbumSelectorComponent();
        // prevent failure during fetch
        fetch.resetMocks();
    });


    describe('Setup component', () => {
        describe('ngOnInit', () => {
            it('should call fetchAlbums with this.userId', () => {
                // prevent failure during fetch
                fetch.mockResponseOnce(JSON.stringify([]));
                let fetchAlbumsSyp = jest.spyOn(fixture, 'fetchAlbums');
                const userId = 1;
                fixture.userId = userId;

                fixture.ngOnInit();

                expect(fetchAlbumsSyp).toHaveBeenCalledWith(userId);
            })
        })
    })
})

