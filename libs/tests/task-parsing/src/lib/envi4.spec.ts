import { GlobalTokens } from '@idl/types/core';
import { TaskToGlobalToken } from '@idl/types/tasks';
import { ResetGlobalDisplayNames } from '@idl/parsing/index';
import { LoadTask } from '@idl/schemas/tasks';
import { GetExtensionPath } from '@idl/shared';

describe(`[auto generated] Correctly parse task file`, () => {
  it(`[auto generated] envi`, async () => {
    // specify reference filepath
    const filepath = GetExtensionPath(
      'idl/test/task-parsing/SetRasterMetadata.task'
    );

    // reset global display names
    ResetGlobalDisplayNames();

    // load our task
    const task = await LoadTask(filepath);

    // define expected local variables
    const expected: GlobalTokens = [
      {
        type: 's',
        name: 'envisetrastermetadatatask',
        pos: [0, 0, 0],
        meta: {
          display: 'envisetrastermetadatatask',
          source: 'user',
          docs: 'This task sets metadata for a raster file.',
          private: false,
          inherits: ['envitask'],
          docsLookup: {},
          props: {
            input_raster: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'input_raster',
              docs: 'Specify a raster on which to perform the metadata edition.',
              type: [
                {
                  name: 'ENVIRaster',
                  display: 'ENVIRaster',
                  args: [],
                  meta: {},
                },
              ],
            },
            raster_filename: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: true,
              display: 'raster_filename',
              docs: 'Filename string of the input raster.',
              type: [{ name: 'String', display: 'String', args: [], meta: {} }],
            },
            header_location: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'header_location',
              docs: "Directory where the file's header, which contains the new metadata, will be saved.",
              type: [{ name: 'String', display: 'String', args: [], meta: {} }],
            },
            ncolumns: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'ncolumns',
              docs: 'The number of column or samples per image for each band.',
              type: [{ name: 'ULong', display: 'ULong', args: [], meta: {} }],
            },
            nrows: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'nrows',
              docs: 'The number of lines or rows per image for each band.',
              type: [{ name: 'ULong', display: 'ULong', args: [], meta: {} }],
            },
            nbands: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'nbands',
              docs: 'The number of bands per image file.',
              type: [{ name: 'ULong', display: 'ULong', args: [], meta: {} }],
            },
            interleave: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'interleave',
              docs: 'Specifies the data interleave of the raster.',
              type: [{ name: 'String', display: 'String', args: [], meta: {} }],
            },
            byte_order: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'byte_order',
              docs: 'The order of the bytes in integer, long integer, 64-bit integer, unsigned 64-bit integer, floating point, double precision, and complex data types. Byte order=0 (Host (Intel) in the Header Info dialog) is least significant byte first (LSF) data (DEC and MS-DOS systems). Byte order=1 (Network (IEEE) in the Header Info dialog) is most significant byte first (MSF) data (all other platforms).',
              type: [{ name: 'String', display: 'String', args: [], meta: {} }],
            },
            data_type: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'data_type',
              docs: 'The data type of the raster pixel data.',
              type: [{ name: 'String', display: 'String', args: [], meta: {} }],
            },
            file_type: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'file_type',
              docs: 'File type in which the raster is stored.',
              type: [{ name: 'String', display: 'String', args: [], meta: {} }],
            },
            header_offset: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'header_offset',
              docs: 'The number of bytes of embedded header information present in the file (for example, 128 bytes for ERDAS 7.5 .lan files). ENVI skips these bytes when reading the file.',
              type: [
                { name: 'ULong64', display: 'ULong64', args: [], meta: {} },
              ],
            },
            x_start: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'x_start',
              docs: 'Defines the X image coordinate for the upper-left pixel in the image. Images that are spatial subsets of larger images often use an image coordinate system that references the parent (or larger) image so that you can link and dynamically overlay the two images.',
              type: [{ name: 'ULong', display: 'ULong', args: [], meta: {} }],
            },
            y_start: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'y_start',
              docs: 'Defines the Y image coordinate for the upper-left pixel in the image. Images that are spatial subsets of larger images often use an image coordinate system that references the parent (or larger) image so that you can link and dynamically overlay the two images.',
              type: [{ name: 'ULong', display: 'ULong', args: [], meta: {} }],
            },
            default_stretch: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'default_stretch',
              docs: 'Determines what type of stretch (% linear, linear range, Gaussian, equalization, square root) to use when ENVI displays the image.',
              type: [{ name: 'String', display: 'String', args: [], meta: {} }],
            },
            acquisition_time: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'acquisition_time',
              docs: 'Data acquisition time string that conforms to the ISO-8601 standard..',
              type: [{ name: 'String', display: 'String', args: [], meta: {} }],
            },
            band_names: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'band_names',
              docs: 'The names of image bands.',
              type: [
                {
                  name: 'Array',
                  display: 'Array<String>',
                  args: [
                    [{ name: 'String', display: 'String', args: [], meta: {} }],
                  ],
                  meta: {},
                },
              ],
            },
            classes: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'classes',
              docs: 'The number of classes in the image.',
              type: [{ name: 'UInt', display: 'UInt', args: [], meta: {} }],
            },
            class_names: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'class_names',
              docs: 'Lists class names for classification files.',
              type: [
                {
                  name: 'Array',
                  display: 'Array<String>',
                  args: [
                    [{ name: 'String', display: 'String', args: [], meta: {} }],
                  ],
                  meta: {},
                },
              ],
            },
            class_lookup: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'class_lookup',
              docs: 'Lists class colors using RGB color definitions for classification files.',
              type: [
                {
                  name: 'Array',
                  display: 'Array<Byte>',
                  args: [
                    [{ name: 'Byte', display: 'Byte', args: [], meta: {} }],
                  ],
                  meta: {},
                },
              ],
            },
            cloud_cover: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'cloud_cover',
              docs: 'Percentage of cloud cover within the raster.',
              type: [{ name: 'Float', display: 'Float', args: [], meta: {} }],
            },
            complex_function: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'complex_function',
              docs: 'Specifies the values to calculate from a complex image and to use when displaying the image, calculating statistics for the image, or writing the image to a new file.',
              type: [{ name: 'String', display: 'String', args: [], meta: {} }],
            },
            data_ignore_value: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'data_ignore_value',
              docs: 'Pixel value that should be ignored in image processing.',
              type: [{ name: 'Double', display: 'Double', args: [], meta: {} }],
            },
            _description: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: '_description',
              docs: 'A string describing the image or the processing performed.',
              type: [
                {
                  name: 'Array',
                  display: 'Array<String>',
                  args: [
                    [{ name: 'String', display: 'String', args: [], meta: {} }],
                  ],
                  meta: {},
                },
              ],
            },
            data_gain_values: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'data_gain_values',
              docs: 'Gain values for each band. Units are W/(m2 * um * sr).',
              type: [
                {
                  name: 'Array',
                  display: 'Array<Double>',
                  args: [
                    [{ name: 'Double', display: 'Double', args: [], meta: {} }],
                  ],
                  meta: {},
                },
              ],
            },
            data_offset_values: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'data_offset_values',
              docs: 'Offset values for each band.',
              type: [
                {
                  name: 'Array',
                  display: 'Array<Double>',
                  args: [
                    [{ name: 'Double', display: 'Double', args: [], meta: {} }],
                  ],
                  meta: {},
                },
              ],
            },
            data_reflectance_gain_values: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'data_reflectance_gain_values',
              docs: 'An array of reflectance gain values.',
              type: [
                {
                  name: 'Array',
                  display: 'Array<Double>',
                  args: [
                    [{ name: 'Double', display: 'Double', args: [], meta: {} }],
                  ],
                  meta: {},
                },
              ],
            },
            data_reflectance_offset_values: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'data_reflectance_offset_values',
              docs: 'An array of reflectance offset values.',
              type: [
                {
                  name: 'Array',
                  display: 'Array<Double>',
                  args: [
                    [{ name: 'Double', display: 'Double', args: [], meta: {} }],
                  ],
                  meta: {},
                },
              ],
            },
            fwhm: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'fwhm',
              docs: 'Lists full-width-half-maximum (FWHM) values of each band in an image.',
              type: [
                {
                  name: 'Array',
                  display: 'Array<Double>',
                  args: [
                    [{ name: 'Double', display: 'Double', args: [], meta: {} }],
                  ],
                  meta: {},
                },
              ],
            },
            bbl: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'bbl',
              docs: 'List of bad bands in an image.',
              type: [
                {
                  name: 'Array',
                  display: 'Array<Int>',
                  args: [[{ name: 'Int', display: 'Int', args: [], meta: {} }]],
                  meta: {},
                },
              ],
            },
            default_bands: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'default_bands',
              docs: 'Indicates which band numbers to automatically load into the current view every time the file is opened.',
              type: [
                {
                  name: 'Array',
                  display: 'Array<ULong>',
                  args: [
                    [{ name: 'ULong', display: 'ULong', args: [], meta: {} }],
                  ],
                  meta: {},
                },
              ],
            },
            spatialref: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'spatialref',
              docs: 'Specifies a spatial reference for the raster.',
              type: [
                {
                  name: '_ENVISpatialRef',
                  display: '_ENVISpatialRef',
                  args: [],
                  meta: {},
                },
              ],
            },
            auxiliary_rpc_spatialref: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'auxiliary_rpc_spatialref',
              docs: 'Specifies rational polynomial coefficient (RPC) geolocation information for the raster that can be used in addition to standard map information.',
              type: [
                {
                  name: 'ENVIRPCRasterSpatialRef',
                  display: 'ENVIRPCRasterSpatialRef',
                  args: [],
                  meta: {},
                },
              ],
            },
            read_procedures: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'read_procedures',
              docs: 'Spatial and spectral read routines that define custom file readers.',
              type: [
                {
                  name: 'Array',
                  display: 'Array<String>',
                  args: [
                    [{ name: 'String', display: 'String', args: [], meta: {} }],
                  ],
                  meta: {},
                },
              ],
            },
            z_plot_titles: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'z_plot_titles',
              docs: 'The x and y axis titles for Z plots.',
              type: [
                {
                  name: 'Array',
                  display: 'Array<String>',
                  args: [
                    [{ name: 'String', display: 'String', args: [], meta: {} }],
                  ],
                  meta: {},
                },
              ],
            },
            z_plot_range: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'z_plot_range',
              docs: 'The default minimum and maximum values for Z plots.',
              type: [
                {
                  name: 'Array',
                  display: 'Array<Double>',
                  args: [
                    [{ name: 'Double', display: 'Double', args: [], meta: {} }],
                  ],
                  meta: {},
                },
              ],
            },
            reflectance_scale_factor: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'reflectance_scale_factor',
              docs: 'The value that, when divided into your data, would scale it from 0-1 reflectance. For example, if the value of 10,000 in your data represents a reflectance value of 1.0, enter a reflectance scale factor of 10,000.',
              type: [{ name: 'Double', display: 'Double', args: [], meta: {} }],
            },
            security_tag: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'security_tag',
              docs: 'A string with security information inherited from formats that typically contain security classification levels (such as NITF).',
              type: [{ name: 'String', display: 'String', args: [], meta: {} }],
            },
            sensor_type: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'sensor_type',
              docs: 'Instrument types, such as Landsat TM, SPOT, RADARSAT, etc.',
              type: [
                {
                  name: 'ENVISensorName',
                  display: 'ENVISensorName',
                  args: [],
                  meta: {},
                },
              ],
            },
            dem_file: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'dem_file',
              docs: 'Path and filename of a DEM associated with the image.',
              type: [{ name: 'String', display: 'String', args: [], meta: {} }],
            },
            dem_band: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'dem_band',
              docs: 'Index (starting at 1) of a selected DEM band associated with the image.',
              type: [{ name: 'UInt', display: 'UInt', args: [], meta: {} }],
            },
            wavelength: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'wavelength',
              docs: 'Lists the center wavelength values of each band in an image. Units should be the same as those used for the fwhm field and set in the wavelength units parameter.',
              type: [
                {
                  name: 'Array',
                  display: 'Array<Double>',
                  args: [
                    [{ name: 'Double', display: 'Double', args: [], meta: {} }],
                  ],
                  meta: {},
                },
              ],
            },
            wavelength_units: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'wavelength_units',
              docs: 'Specifies the units of the wavelength information.',
              type: [{ name: 'String', display: 'String', args: [], meta: {} }],
            },
            sun_elevation: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'sun_elevation',
              docs: 'Angle of the sun (in degrees) above the horizon.',
              type: [{ name: 'Double', display: 'Double', args: [], meta: {} }],
            },
            sun_azimuth: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'sun_azimuth',
              docs: 'Angle of the sun (in degrees) from due north in a clockwise direction.',
              type: [{ name: 'Double', display: 'Double', args: [], meta: {} }],
            },
            solar_irradiance: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'solar_irradiance',
              docs: 'Top of the atmosphere solar irradiance per band. Units are W/(m2 * um).',
              type: [
                {
                  name: 'Array',
                  display: 'Array<Double>',
                  args: [
                    [{ name: 'Double', display: 'Double', args: [], meta: {} }],
                  ],
                  meta: {},
                },
              ],
            },
            timestamp: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'timestamp',
              docs: 'Temporal Cube Timestamps.',
              type: [
                {
                  name: 'Array',
                  display: 'Array<String>',
                  args: [
                    [{ name: 'String', display: 'String', args: [], meta: {} }],
                  ],
                  meta: {},
                },
              ],
            },
            custom_metadata: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: true,
              display: 'custom_metadata',
              docs: 'A hash of key-value pairs indicating user-defined custom metadata items not defined in the ENVI header file format.',
              type: [
                {
                  name: 'Hash',
                  display: 'Hash<any>',
                  args: [[{ name: 'any', display: 'any', args: [], meta: {} }]],
                  meta: {},
                },
              ],
            },
            output_raster_uri: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'in',
              private: false,
              display: 'output_raster_uri',
              docs: 'Specify a string with the fully-qualified path and filename for output_raster.',
              type: [{ name: 'String', display: 'String', args: [], meta: {} }],
            },
            output_raster: {
              source: 'user',
              code: true,
              pos: [0, 0, 0],
              direction: 'out',
              private: false,
              display: 'output_raster',
              docs: 'Updating the header file requires closing the raster. Use this parameter to reopen the file a return a reference to the new raster.',
              type: [
                {
                  name: 'ENVIRaster',
                  display: 'ENVIRaster',
                  args: [],
                  meta: {},
                },
              ],
            },
          },
        },
      },
      {
        type: 'f',
        name: 'envisetrastermetadatatask',
        pos: [0, 0, 0],
        meta: {
          display: 'ENVISetRasterMetadataTask',
          source: 'user',
          docs: 'This task sets metadata for a raster file.',
          private: false,
          returns: [
            {
              name: 'envisetrastermetadatatask',
              display: 'ENVITask<setrastermetadata>',
              args: [
                [
                  {
                    name: 'setrastermetadata',
                    display: 'setrastermetadata',
                    args: [],
                    meta: {},
                  },
                ],
              ],
              meta: {},
            },
          ],
          args: {},
          kws: {},
          docsLookup: {},
          struct: [],
        },
      },
    ];

    // verify results
    expect(expected).toEqual(TaskToGlobalToken(task));
  });
});
