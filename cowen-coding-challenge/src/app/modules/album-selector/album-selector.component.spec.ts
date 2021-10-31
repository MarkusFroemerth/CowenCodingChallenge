import { AlbumSelectorComponent } from "./album-selector.component"

describe('AlbumSelectorComponent', () => {
    let fixture: AlbumSelectorComponent;

    beforeEach(() => {
        fixture = new AlbumSelectorComponent();
    });

    describe('Setup component', () => {
        describe('ngOnInit', () => {
            it('should call fetchAlbums with this.userId', () => {
                let fetchAlbumsSyp = jest.spyOn(fixture, 'fetchAlbums');
                const userId = 1;
                fixture.userId = userId;

                fixture.ngOnInit();

                expect(fetchAlbumsSyp).toHaveBeenCalledWith(userId);
                // expect(fixture.albums.length).toBe(10);
            })
        })
    })
})
